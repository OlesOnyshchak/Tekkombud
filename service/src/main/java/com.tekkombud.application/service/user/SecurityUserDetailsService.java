package com.tekkombud.application.service.user;

import com.tekkombud.application.dao.CRUDRepository;
import com.tekkombud.application.entity.User;
import com.tekkombud.application.entity.util.Status;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.core.userdetails.jdbc.JdbcDaoImpl;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.List;

@Service
public class SecurityUserDetailsService extends JdbcDaoImpl {

    public static final String DEF_USERS_BY_USERNAME_QUERY = "select password from user where username = '?'";
    public static final String DEF_AUTHORITIES_BY_USERNAME_QUERY = "select username, status as authority where username = '?'";

    @Autowired
    private DataSource dataSource;

    @Autowired
    private CRUDRepository userRepository;

    public SecurityUserDetailsService() {
        super();
        setUsersByUsernameQuery(DEF_USERS_BY_USERNAME_QUERY);
        setAuthoritiesByUsernameQuery(DEF_AUTHORITIES_BY_USERNAME_QUERY);
    }

    @PostConstruct
    private void initialize() {
        setDataSource(dataSource);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findUserByUsername(username);

        if (user == null) {
            String message = "Username not found" + username;
            System.out.println(message);
            throw new UsernameNotFoundException(message);
        }

        System.out.println("Found user in database: " + user);
        System.out.println(user.getPassword());
        System.out.println(username);

        List<GrantedAuthority> authorities = new ArrayList<>();
        Status userRoles = user.getStatus();
        System.out.println(userRoles.name());

        authorities.add(new SimpleGrantedAuthority(userRoles.name()));


        return new org.springframework.security.core.userdetails.User(username, user.getPassword(), authorities);
    }
}

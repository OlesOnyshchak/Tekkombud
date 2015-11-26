package com.tekkombud.application.service.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.jdbc.JdbcDaoImpl;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import javax.sql.DataSource;
import java.util.List;

@Service
public class SecurityUserDetailsService extends JdbcDaoImpl {

    public static final String DEF_USERS_BY_USERNAME_QUERY = "select Password, from user where First_Name = ?";
    public static final String DEF_AUTHORITIES_BY_USERNAME_QUERY = "select First_Name as username, status as authority where username = ?";

    @Autowired
    private DataSource dataSource;

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
    protected List<UserDetails> loadUsersByUsername(String username) {
        return this.getJdbcTemplate().query(getUsersByUsernameQuery(), new String[]{username}, (rs, rowNum) -> {
            String password = rs.getString(1);

            return new CustomUserDetails(username, password, true);
        });
    }

    @Override
    protected UserDetails createUserDetails(String username, UserDetails userDetails, List<GrantedAuthority> authorities) {
        Class<? extends UserDetails> userDetailsClass = userDetails.getClass();

        if (!userDetailsClass.equals(CustomUserDetails.class)) {
            throw new InternalAuthenticationServiceException("Provided UserDetails is incorrect: " + userDetailsClass);
        }

        CustomUserDetails customUserDetails = (CustomUserDetails) userDetails;

        customUserDetails.setAuthorities(authorities);

        return customUserDetails;
    }

    /**
     * Provide additional information about company(organization) where user
     * works except SYS_ADMIN role.
     */
    public static class CustomUserDetails extends org.springframework.security.core.userdetails.User {

        public void setAuthorities(List<GrantedAuthority> authorities) {
            this.authorities = authorities;
        }

        private List<GrantedAuthority> authorities;


        public CustomUserDetails(String username, String password, boolean enabled) {
            super(username, password, enabled, true, true, true, AuthorityUtils.NO_AUTHORITIES);
        }

        @Override
        public List<GrantedAuthority> getAuthorities() {
            return authorities;
        }
    }
}

package com.tekkombud.application.entity;

import com.tekkombud.application.entity.util.OfferStatus;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
public class Offer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String name;
    @Column
    private String description;
    @Column
    private String skills;
    @Column
    private String salary;

    @Enumerated(value = EnumType.STRING)
    private OfferStatus offerStatus;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "offer_id")
    private Set<CV> cvList;

    public Offer() {
    }


    public Set<CV> getCvList() {
        return cvList;
    }

    public void setCvList(Set<CV> cvList) {
        this.cvList = cvList;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSkills() {
        return skills;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }

    public String getSalary() {
        return salary;
    }

    public void setSalary(String salary) {
        this.salary = salary;
    }

    public OfferStatus getOfferStatus() {
        return offerStatus;
    }

    public void setOfferStatus(OfferStatus offerStatus) {
        this.offerStatus = offerStatus;
    }

    @Override
    public String toString() {
        return "Offer{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", skills='" + skills + '\'' +
                ", salary='" + salary + '\'' +
                ", offerStatus=" + offerStatus +
                '}';
    }
}

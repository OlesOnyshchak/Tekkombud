package com.tekkombud.application.controller.dto;

import com.tekkombud.application.entity.util.OfferStatus;

import javax.persistence.*;

public class OfferDTO {

    private String name;
    private String description;
    private String skills;
    private String salary;

    public OfferDTO() {
    }

    public OfferDTO(String name, String description, String skills, String salary) {
        this.name = name;
        this.description = description;
        this.skills = skills;
        this.salary = salary;
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

    @Override
    public String toString() {
        return "OfferDTO{" +
                "name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", skills='" + skills + '\'' +
                ", salary='" + salary + '\'' +
                '}';
    }
}

package com.tekkombud.application.controller.dto;

public class OfferDTO {

    private Long id;
    private String name;
    private String description;
    private String skills;
    private String salary;

    public OfferDTO() {
    }

    public OfferDTO(Long id, String name, String description, String skills, String salary) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.skills = skills;
        this.salary = salary;
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

package com.meetings.demo.DTOs;

import javax.persistence.Embeddable;

@Embeddable
public class Person {
    String name;
    int id;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

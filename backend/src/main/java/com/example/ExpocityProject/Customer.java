package com.example.ExpocityProject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.amqp.RabbitConnectionDetails;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.aggregation.ArithmeticOperators;
import org.springframework.stereotype.Component;

public class Customer {
    private String name;
    private Address address;
    public Customer(String name, Address address) {
        this.name = name;
        this.address = address;
    }
    @Bean
    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }
    @Bean
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }






}

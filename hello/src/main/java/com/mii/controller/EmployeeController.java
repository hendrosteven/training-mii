/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mii.controller;

import com.mii.entity.Employee;
import com.mii.services.EmployeeService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Hendro Steven
 */
@RestController
@RequestMapping("/api/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @RequestMapping(method = RequestMethod.POST)
    public Employee insertNewEmployee(@RequestBody Employee employee) {
        return employeeService.insertNewEmployee(employee);
    }

    @RequestMapping(method = RequestMethod.GET) 
    public List<Employee> findAllEmployee() {
        return employeeService.findAllEmployee();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Employee findEmployeeById(@PathVariable("id") Long id) {
        return employeeService.findEmployeeById(id);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public Employee updateEmployee(@RequestBody Employee employee) {
        return employeeService.insertNewEmployee(employee);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public boolean removeEmployeeById(@PathVariable("id") Long id) {
        return employeeService.removeEmployee(id);
    }
}

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mii.services;

import com.mii.entity.Employee;
import com.mii.repo.EmployeeRepo;
import java.util.List;
import javax.transaction.Transactional;
import org.apache.commons.collections.IteratorUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Hendro Steven
 */
@Service("employeeService")
@Transactional
public class EmployeeService {

    @Autowired
    private EmployeeRepo employeeRepo;
 
    public Employee insertNewEmployee(Employee employee) {
        return employeeRepo.save(employee);
    }

    public List<Employee> findAllEmployee() {
        return IteratorUtils.toList(employeeRepo.findAll().iterator());
    }

    public Employee findEmployeeById(Long id) {
        return employeeRepo.findOne(id);
    }

    public Employee updateEmployee(Employee employee) {
        return employeeRepo.save(employee);
    }

    public boolean removeEmployee(Long id) {
        employeeRepo.delete(id);
        return true;
    }

}

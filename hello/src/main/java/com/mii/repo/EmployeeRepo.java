/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mii.repo;

import com.mii.entity.Employee;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author Hendro Steven
 */
public interface EmployeeRepo extends CrudRepository<Employee, Long> {

    @Query("SELECT e FROM Employee e WHERE e.departement.id= :departementId")
    public List<Employee> findByDepartementId(@Param("departementId") Long departementId);

    @Query("SELECT e FROM Employee e WHERE LOWER(e.firstName) LIKE LOWER(:name)")
    public List<Employee> findByName(@Param("name") String name);

    @Query("SELECT e FROM Employee e WHERE MONTH(e.birthDate)= :month")
    public List<Employee> findByBirthDayMonth(@Param("month") int month);
}

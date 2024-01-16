package com.example.demoB.rest;
import com.example.demoB.entity.ErrorResponse;
import com.example.demoB.entity.SinhVien;

import com.example.demoB.exception.SinhVienException;
import jakarta.annotation.PostConstruct;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/sinhvien")
public class SinhVienController {
    public  List<SinhVien> danhSach;
    //thuc hien sau khi khoi tao
    @PostConstruct
    public void createdanhSach(){
        danhSach=new ArrayList<SinhVien>();
        danhSach.add(new SinhVien(1,"Nguyen Van A",18, "CNTT",9));
        danhSach.add(new SinhVien(2,"Nguyen Van b",19, "QTKD",8.5));
        danhSach.add(new SinhVien(3,"Nguyen Van c",20, "CNTT",9.5));
        danhSach.add(new SinhVien(4,"Nguyen Van d",18, "KT",7));
        danhSach.add(new SinhVien(5,"Nguyen Van e",20, "CNTT",8));
    }
    @GetMapping("/")
    public List<SinhVien> getDanhSach(){
        return danhSach;
    }
    @GetMapping("/{id}")
    public SinhVien getSinhVien(@PathVariable int id){
        SinhVien result = null;
        for(SinhVien sv:danhSach){
            if(sv.getId()==id){
                return sv;
            }
        }
        if(result==null){
            throw new SinhVienException("Khong tim thay sinh vien co id: "+id);
        }
        return result;
    }

    @GetMapping("/index/{index}")
    public SinhVien getSinhVien2sss(@PathVariable int index){
        SinhVien sv=null;
        try{
            sv = danhSach.get(index);
        }catch(IndexOutOfBoundsException e){
            throw new SinhVienException("Khong tim thay sinh vien index "+index);
        }
       return sv;

    }

}

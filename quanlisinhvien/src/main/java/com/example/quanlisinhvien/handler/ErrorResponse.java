package com.example.quanlisinhvien.handler;

public class ErrorResponse {
    private int status;
    private String message;
    private Long timestamp;

    public ErrorResponse(int status, String message) {
        this.status = status;
        this.message = message;
        this.timestamp= System.currentTimeMillis();
    }
}

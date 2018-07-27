package com.yunzainfo.pitcher.plugin.project.utils;

import jdk.nashorn.internal.codegen.Label;

import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.Paths;
import java.sql.SQLSyntaxErrorException;
import java.util.Scanner;

/**
 * The interface Book detail mapper.
 *
 * @Description: 基础
 * @Auther: Mr.Bin
 * @create: 2018-04-24 10:08
 */
public class Test {

    public static void main(String[] args) throws IOException {
        String str = "gree ting";
        //System.out.println(str.codePointCount(0,str.length()));
        Scanner in = new Scanner(Paths.get("C:\\Users\\Administrator\\Desktop\\my.txt"),"UTF-8");


        PrintWriter pw = new PrintWriter("C:\\Users\\Administrator\\Desktop\\test.txt");
        while(in.hasNext()){
            pw.append(in.next());
        }
        pw.flush();
        pw.close();
        while(true){
            for(int i=0;i<10;i++){
            }
        }

    }
}

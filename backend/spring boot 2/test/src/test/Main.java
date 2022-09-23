package test;

import java.util.Arrays;

public class Main {

    public static int[] rimuoviDuplicati(int[] arr) {
        return Arrays.stream(arr).distinct().toArray();
    }
 
    public static void main(String[] args) {
        int[] arr = {1, 2, 2, 10, 10};
 
        int[] distinct = rimuoviDuplicati(arr);
        System.out.println(Arrays.toString(distinct));
    }
}

package esercizio1;

public class Cresente {

	public static void main(String[] args) {
		int[] arr = new int[] {44,1,1,1,1,1,1,54,2,6,9,122,1000,6654,987};
		for (int i : arr) {
			System.out.print(i +" ");
		}
		for (int i = 0;i < arr.length; i++) {
			for(int j= 0; j < arr.length; j++) {
				if (arr[i] < arr[j]) {
					int x = arr[i];
					arr[i] = arr[j];
					arr[j] = x;
				}
			}
		}
		System.out.println("\n Array ordinato \n");
		for (int i : arr) {
			System.out.print(i + " ");
		}
		
	}

}

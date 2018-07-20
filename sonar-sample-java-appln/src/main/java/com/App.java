package com;

public class App {
	
	
	// v1
	public void getFoodV1() {
		System.out.println("veg");
		System.out.println("non-veg");
		System.out.println("veg");
		System.out.println("non-veg");
		System.out.println("veg");
		System.out.println("non-veg");
		System.out.println("veg");
		System.out.println("non-veg");
		System.out.println("veg");
		System.out.println("non-veg");
		System.out.println("veg");
		System.out.println("non-veg");
	}
	
	public static int getLen() {
		String item=null;
		if(item==null)
			return item.length();
		else
			return 0;
	}
	
	public static void main(String[] args) {
		System.out.println("hello sonar");
		int v=12;
		System.out.println(getLen());
		
		System.out.println("missing semi-colon");
		
		String menu="food ready";
	}

}

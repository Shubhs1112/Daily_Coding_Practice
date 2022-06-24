public class Patterns {
    int row = 5;

    void pattern1() {
        System.out.println("Pattern 1: \n");
        //Outer loop for rows.
        for (int i = 1; i <= row; i++) {
            //Inner loop for printing the stars.
            for (int j = 1; j <= i; j++) {
                if (j == 1 || i == 5 || i == j) {
                    System.out.print("* ");
                } else {
                    System.out.print("  ");
                }
            }
            System.out.println(); //For new line after every outer loop
        }
        System.out.println();

    }

    void pattern2() {
        System.out.println("Pattern 2: \n");
        //Outer loop for rows
        for (int i = 1; i <= row; i++) {
            //Inner loop for printing the elements.
            for (int j = 1; j <= i; j++) {
                if (j == 1 || j == 3 || j == 5) {
                    System.out.print("1 ");
                } else {
                    System.out.print("0 ");
                }
            }
            System.out.println(); //For new line after every outer loop
        }
        System.out.println();
    }

    void pattern3() {
        System.out.println("Pattern 3: \n");
        //Outer loop for rows
        for (int i = 1; i <= row; i++) {
            //Inner row for
            for (int j = 1; j < i + 2; j++) {
                if (i == 1) {
                    System.out.print("1");
                } else if (i % 2 == 0) {
                    System.out.print("*");
                } else if (i == 3) {
                    System.out.print("2");
                } else if (i == 5) {
                    System.out.print("3");
                }

            }

            System.out.println();
        }
        System.out.println();
    }

    void pattern4() {
        System.out.println("Pattern 4: \n");
        //Outer loop for rows
        for (int i = 0; i < row; i++) {
            for (int j = 1; j <= row - i; j++) {
                System.out.print("0");
            }
            for (int j = 1; j <= i; j++) {
                System.out.print(j);
            }
            System.out.println();
        }
    }
}
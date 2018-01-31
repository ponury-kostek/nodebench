public class Teilbarkeitlol {
	public static void methode() {
		for (int zahl = 111; zahl <= 999; zahl++) {
			if (zahl % 10 == 0) {

			} else {
				int dig1 = zahl / 100;
				int dig2 = (zahl % 100) / 10;
				int dig3 = zahl % 10;
				if (zahl % dig1 == 0 && zahl % dig2 == 0 && zahl % dig3 == 0) {
					System.out.println(zahl);
				} else {}
			}
		}
	}

	public static void main(String[] args) {
		methode();
	}
}
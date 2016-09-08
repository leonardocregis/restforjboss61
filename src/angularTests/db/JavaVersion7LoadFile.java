package angularTests.db;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class JavaVersion7LoadFile implements JavaVersionCommand {

	private InputStreamReader isr;
	private StringBuilder sb;

	public JavaVersion7LoadFile(InputStreamReader isr,
			StringBuilder destinyString) {
		this.isr = isr;
		this.sb = destinyString;
	}

	@Override
	public void executeCommand() throws Exception {
		BufferedReader br = null;
		try {
			br = new BufferedReader(isr);
			String line = null;
			while ((line = br.readLine()) != null) {
				sb.append(line);
			}
		} finally {
			if (br !=null)
				br.close();
		}
	}

}

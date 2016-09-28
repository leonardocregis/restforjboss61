package angularTests.db;



public class JavaVersion8LoadFile implements JavaVersionCommand {
	private String localFile;
	private StringBuilder sb;
	
	
	public JavaVersion8LoadFile(String localFile,StringBuilder sb) {
		this.localFile = localFile;
		this.sb = sb;
	}

	@Override
	public void executeCommand() {
//		TODO to use this file in java 8 uncomment the lines below
//		Files.lines(new File(localFile).toPath()).forEach((s)-> this.sb.append(s));

	}

}

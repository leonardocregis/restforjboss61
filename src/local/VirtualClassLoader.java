package local;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;

public class VirtualClassLoader extends ClassLoader {

	public VirtualClassLoader(ClassLoader parent) {
		super(parent);
	}

	@Override
	protected Class<?> findClass(String name) throws ClassNotFoundException {
		try {
			String url = "local/Test.class";
			File f = new File(url);
			if (!f.isFile())
				throw new RuntimeException("class not found : local/Test.class");
			InputStream input = new FileInputStream(url);
			ByteArrayOutputStream buffer = new ByteArrayOutputStream();
			int data = input.read();

			while (data != -1) {
				buffer.write(data);
				data = input.read();
			}
			input.close();

			byte[] classData = buffer.toByteArray();

			return defineClass("local.Test", classData, 0, classData.length);

		} catch (MalformedURLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}

	public static void main(String[] args) throws ClassNotFoundException, IllegalAccessException,
			InstantiationException {

		ClassLoader parentClassLoader = VirtualClassLoader.class.getClassLoader();
		VirtualClassLoader classLoader = new VirtualClassLoader(parentClassLoader);
		Class myObjectClass = classLoader.loadClass("virtual.Test");
		MyInterface object1 = (MyInterface) myObjectClass.newInstance();
		System.out.println(object1.getResult());

	}
}

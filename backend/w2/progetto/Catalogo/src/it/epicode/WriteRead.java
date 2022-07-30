package it.epicode;

import java.io.IOException;
import java.util.List;


public interface WriteRead {

	public List<String> read() throws IOException;
	public void write() throws IOException;
}

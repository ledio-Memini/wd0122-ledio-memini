package it.epicode;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.io.FileUtils;

public class WriteReadClass implements WriteRead{
	
	public Map<String, Catalog> mainCatalog;
	
	public WriteReadClass(Map<String, Catalog> mainCatalog) {

		this.mainCatalog = mainCatalog;
	}

	@Override
	//metodo per scrivere file su disco
	//in questo caso nel file andremo a scrivere la lista del catalogo
	public void write() throws IOException {

		String catalogToText = "";

		for (Catalog cat : mainCatalog.values()) {
			catalogToText += (cat.toString() + ";");
		}

		File catalogFile = new File("./catalog.txt");

		FileUtils.writeStringToFile(catalogFile, catalogToText, "UTF-8");
		
	}

	@Override
	
	//metodo per leggere il file catalog.txt
	public List<String> read() throws IOException {
		List<String> listaRead = new ArrayList<String>();
		
		File file = new File("./catalog.txt");

		String readString = FileUtils.readFileToString(file, "UTF-8");
		String[] catalog = readString.split(";");

		for (String element : catalog) {
			listaRead.add(element);
	}
	return listaRead;
	}
	
	
}

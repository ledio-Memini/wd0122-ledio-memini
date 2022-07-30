package esercizio;

import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.apache.commons.io.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import esercizio.datamodel.Area;
import esercizio.datamodel.City;
import esercizio.datamodel.Provincia;
import esercizio.datamodel.Region;

public class Program {
	
	private static final Logger log = LoggerFactory.getLogger(Program.class);

	public static void main(String[] args) {
		
		
		
		try {
			String fileName = "./comuni.csv";
			File file = FileUtils.getFile(fileName);
			List<String>  lines = FileUtils.readLines(file,StandardCharsets.ISO_8859_1);
			List<City> cities = lines.stream()
			
				.skip(3)
				
				//questo map prende una string in input e restituisce un array di stringhe
				.map(line -> line.split(";"))
				.map(parts -> new City(Integer.parseInt(parts[4]),
						parts[5],
						parts[13].charAt(0) == 1,
						parts[19],
						new Provincia(Integer.parseInt(parts[2]),
								parts[11],
								parts[14],
								new Region(Integer.parseInt(parts[0]),
										parts[10],
										new Area(
												Integer.parseInt(parts[8]),
												parts[9])))))
				.collect(Collectors.toList());
				cities.stream().limit(10).forEach(city -> log.info("{}",city));
			log.info("Ho caricato {} citta", cities.size());
			
			cities.stream()
			.map(c -> c.getProvincia())
			.distinct()//scarta tutti i duplicati
			.forEach(p -> log.info("{}", p));
			
		} catch (IOException e) {
			
			log.error("errore nella lettura del file", e);
		}

	}

}

package it.epicode.be.gestioneventi.model.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import it.epicode.be.gestioneventi.model.Concerto;
import it.epicode.be.gestioneventi.model.Evento;
import it.epicode.be.gestioneventi.model.GaraDiAtletica;
import it.epicode.be.gestioneventi.model.GenereConcerto;
import it.epicode.be.gestioneventi.model.Partecipazione;
import it.epicode.be.gestioneventi.model.PartitaDiCalcio;
import it.epicode.be.gestioneventi.model.Persona;
import it.epicode.be.gestioneventi.util.JpaUtil;

public class EventoDAO {
	private static final Logger logger = LoggerFactory.getLogger(EventoDAO.class);

	public void save(Evento object) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		try {

			EntityTransaction transaction = em.getTransaction();
			transaction.begin();

			em.persist(object);

			transaction.commit();
		} catch (Exception ex) {
			em.getTransaction().rollback();

			logger.error("Error saving object: " + object.getClass().getSimpleName(), ex);
			throw ex;

		} finally {
			em.close();
		}

	}

	public void refresh(Evento object) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		try {

			em.refresh(object);

		} finally {
			em.close();
		}

	}

	public Evento getById(Long id) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		try {

			return em.find(Evento.class, id);

		} finally {
			em.close();
		}

	}

	public void delete(Evento object) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		try {

			EntityTransaction transaction = em.getTransaction();
			transaction.begin();

			em.remove(object);

			transaction.commit();
		} catch (Exception ex) {
			em.getTransaction().rollback();
			logger.error("Error deleting object: " + object.getClass().getSimpleName(), ex);
			throw ex;

		} finally {
			em.close();
		}

	}

	public List<Concerto> getConcertiInStreaming(Boolean inStreaming) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		try {

			Query query = em.createNamedQuery("concertiInStreaming");

			query.setParameter("streaming", inStreaming);
			return query.getResultList();

		} finally {
			em.close();
		}
	}

	public List<Concerto> getConcertiPerGenere(List<GenereConcerto> listaGeneri) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		try {

			Query query = em.createNamedQuery("concertiPerGenere");

			query.setParameter("listagenere", listaGeneri);
			return query.getResultList();

		} finally {
			em.close();
		}
	}

	public List<PartitaDiCalcio> getPartiteVinteInCasa() {

		return executeNamedQuery("partiteVinteInCasa", PartitaDiCalcio.class);

	}

	public List<PartitaDiCalcio> getPartiteVinteInTrasferta() {
		return executeNamedQuery("partiteVinteInTrasferta", PartitaDiCalcio.class);
	}

	public List<PartitaDiCalcio> getPartitePareggiate() {
		return executeNamedQuery("partitePareggiate", PartitaDiCalcio.class);
	}

	private <T> List<T> executeNamedQuery(String namedQuery, Class<T> returnClass) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		try {

			Query query = em.createNamedQuery(namedQuery);

			return query.getResultList();

		} finally {
			em.close();
		}
	}
	
	
	public List<Evento> getEventiPerInvitato(Persona invitato) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		try {

			Query query = em.createNamedQuery("eventiPerInvitato");

			query.setParameter("persona", invitato);
			return query.getResultList();

		} finally {
			em.close();
		}
	}
	
	
	public List<GaraDiAtletica> getGareDiAtleticaPerVincitore(Persona vincitore) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		try {

			Query query = em.createNamedQuery("garePerVincitore");

			query.setParameter("persona", vincitore);
			return query.getResultList();

		} finally {
			em.close();
		}
	}
	
	
	public List<Evento> getEventiSoldout(){
		
		return executeNamedQuery("eventiSoldout", Evento.class);

	}
	

	
	public List<GaraDiAtletica> getGareDiAtleticaPerPartecipante(Persona partecipante) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		try {

			Query query = em.createNamedQuery("garePerPartecipante");

			query.setParameter("persona", partecipante);
			return query.getResultList();

		} finally {
			em.close();
		}
	}

}

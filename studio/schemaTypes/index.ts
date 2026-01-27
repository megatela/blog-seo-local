import post from './post'
import cluster from './cluster'
import caseStudy from './caseStudy'

/**
 * Este archivo actúa como el "índice" de tu base de datos.
 * Cada vez que añadimos un nuevo tipo de contenido (como 'cluster'),
 * debemos exportarlo aquí para que Sanity lo muestre en el panel.
 */
export const schemaTypes = [
  post,      // Artículos individuales
  cluster,   // Secciones pilar (GBP, IA, etc.)
  caseStudy  // Casos de éxito
]
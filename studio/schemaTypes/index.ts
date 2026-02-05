import post from './post'
import cluster from './cluster'
import caseStudy from './caseStudy'

/**
 * Exportación central de esquemas.
 * El orden aquí determina el orden en la barra lateral del Studio.
 */
export const schemaTypes = [
  post,
  cluster,
  caseStudy
]
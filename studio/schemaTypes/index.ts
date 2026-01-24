import post from './post'
import cluster from './cluster'
import caseStudy from './caseStudy'

// Aquí registramos los 3 pilares de tu arquitectura headless
export const schemaTypes = [
  post,      // Tus artículos optimizados
  cluster,   // Tus clústeres de autoridad (GBP, IA, etc.)
  caseStudy  // Tus pruebas de resultados y autoridad
]
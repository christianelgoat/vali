
import React from 'react';
import Card from './Card';

const BulletPoint: React.FC<{ children: React.ReactNode, icon: 'conclusion' | 'finding' | 'action' }> = ({ children, icon }) => {
    
    const iconMap = {
        conclusion: (
            <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        finding: (
             <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
        ),
        action: (
            <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        )
    };

    return (
        <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 pt-0.5">
                {iconMap[icon]}
            </div>
            <p className="text-medium-text text-base">{children}</p>
        </div>
    );
};


const ConclusionSection: React.FC = () => {
  return (
    <Card title="10. Conclusiones de la Validación y Siguientes Pasos">
        <div className="space-y-6">
            <div>
                <BulletPoint icon="conclusion">
                    <strong className="font-semibold text-dark-text">Conclusión Principal:</strong> La validación demostró que el concepto del MVP es valorado por los usuarios (reduce el estrés y organiza la información), pero la ejecución técnica actual es deficiente e impide la consecución de los objetivos de eficiencia y la adopción por parte del usuario.
                </BulletPoint>
            </div>
            <div>
                <BulletPoint icon="finding">
                    <strong className="font-semibold text-dark-text">Hallazgo Crítico:</strong> La fiabilidad técnica (bugs, lentitud, pérdida de datos) es la barrera número uno para el éxito del proyecto. Antes de considerar cualquier nueva funcionalidad, es imperativo alcanzar un nivel básico de rendimiento y estabilidad.
                </BulletPoint>
            </div>
            
            <div>
                <BulletPoint icon="action">
                    <strong className="font-semibold text-dark-text">Acciones Inmediatas (Hoja de Ruta Priorizada):</strong> La siguiente fase del proyecto se centrará exclusivamente en la "deuda técnica":
                </BulletPoint>
                <ul className="mt-3 pl-10 space-y-2 list-disc list-outside text-medium-text">
                    <li><strong className="text-dark-text">Prioridad 1:</strong> Corrección de Errores (Bug Fixing): Enfocarse en solucionar los errores críticos reportados, especialmente los relacionados con el guardado de datos.</li>
                    <li><strong className="text-dark-text">Prioridad 2:</strong> Optimización del Rendimiento: Refactorizar el código para mejorar la velocidad de carga y la respuesta de la aplicación.</li>
                    <li><strong className="text-dark-text">Prioridad 3:</strong> Mejoras de Feedback en la UI: Implementar confirmaciones visuales claras (ej. "¡Guardado!") para reconstruir la confianza del usuario.</li>
                </ul>
                <p className="mt-4 pl-9 text-medium-text text-base">
                    Una vez alcanzada la estabilidad, se realizará una segunda ronda de pruebas de validación para medir si los objetivos de tiempo y aceptación pueden ser cumplidos.
                </p>
            </div>
        </div>
    </Card>
  );
};

export default ConclusionSection;

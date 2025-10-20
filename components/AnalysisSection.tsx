
import React from 'react';
import Card from './Card';
import { Status, AnalysisPoint } from '../types';

const analysisData: AnalysisPoint[] = [
    {
        title: 'Reducción de Desperdicio y Tiempo',
        status: Status.NotFulfilled,
        finding: 'El prototipo no cumplió las metas de reducir el desperdicio en un 15% ni el tiempo de gestión en un 25%. El promedio de reducción de tiempo fue del 0%, indicando que, en su estado actual, la herramienta es tan rápida (o lenta) como los métodos manuales.',
        rootCause: 'La causa principal de este bajo rendimiento no es conceptual, sino técnica. Los problemas de lentitud, bloqueos y errores al guardar datos anularon cualquier ganancia potencial en eficiencia. Los usuarios pasaron tiempo lidiando con los fallos del sistema, lo que resultó en una reducción de tiempo neta de cero.'
    },
    {
        title: 'Reducción de Estrés o Frustración',
        status: Status.Fulfilled,
        finding: 'Con una mejora promedio de +0.97, el prototipo sí logró cumplir el objetivo de aliviar los puntos de dolor emocionales de los usuarios.',
        rootCause: 'Incluso con fallos técnicos, los usuarios valoraron positivamente la centralización de la información y la claridad de una interfaz digital en comparación con métodos manuales desordenados. Esto valida que la dirección del proyecto es correcta en términos de mejorar la experiencia del usuario (UX), pero la ejecución técnica debe mejorar.'
    },
    {
        title: 'Aceptación del Prototipo',
        status: Status.NotFulfilled,
        finding: 'Con una tasa de aceptación del 53%, el MVP no alcanzó el umbral del 80% necesario para considerarse viable para un lanzamiento.',
        rootCause: 'La correlación es directa: la baja aceptación está directamente causada por la falta de fiabilidad técnica. Los usuarios no están dispuestos a adoptar una herramienta que puede perder sus datos o hacerles perder el tiempo con errores. El feedback cualitativo confirma que la principal barrera para la adopción es la falta de confianza en la robustez del software.'
    }
]

const AnalysisPointCard: React.FC<{ point: AnalysisPoint, index: number }> = ({ point, index }) => {
    const statusColor = point.status === Status.Fulfilled ? 'border-secondary' : 'border-danger';

    return (
        <div className={`border-l-4 ${statusColor} pl-4 py-2`}>
            <h3 className="text-lg font-semibold text-dark-text flex items-center">
                <span className="mr-2 text-primary font-bold">{index + 1}.</span>
                {point.title}
                <span className={`ml-2 text-xs font-bold uppercase px-2 py-0.5 rounded-md ${point.status === Status.Fulfilled ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {point.status}
                </span>
            </h3>
            <div className="mt-2 text-medium-text space-y-3 text-base">
                <p><strong className="font-semibold text-dark-text">Hallazgo:</strong> {point.finding}</p>
                <p><strong className="font-semibold text-dark-text">Análisis Causa-Raíz:</strong> {point.rootCause}</p>
            </div>
        </div>
    )
}

const AnalysisSection: React.FC = () => {
    return (
        <Card title="9.1. Análisis y Comparativa con Criterios de Aceptabilidad">
            <div className="space-y-6">
                {analysisData.map((point, index) => (
                    <AnalysisPointCard key={point.title} point={point} index={index} />
                ))}
            </div>
        </Card>
    );
};

export default AnalysisSection;

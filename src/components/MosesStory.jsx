import React from 'react';

export default function MosesStory() {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">La Historia de Moisés</h2>
            <p className="text-gray-700 text-base mb-4">
                Moisés es una figura central en las tradiciones religiosas judía, cristiana e islámica. Según las escrituras,
                fue elegido por Dios para liberar al pueblo de Israel de la esclavitud en Egipto. Conocido por su valentía y liderazgo,
                Moisés condujo a los israelitas a través del Mar Rojo, recibieron los Diez Mandamientos en el Monte Sinaí y viajaron
                por el desierto en su camino hacia la Tierra Prometida.
            </p>
            <img
                src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=512&height=512"
                alt="Moisés"
                className="w-full h-auto rounded-md mb-4"
            />
            <p className="text-gray-700 text-base">
                La historia de Moisés es una inspiración de fe, resiliencia y liderazgo. Su legado perdura a través de los siglos,
                recordándonos la importancia de la libertad, la justicia y la obediencia a los principios divinos.
            </p>
            <a
                href="https://www.zapt.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-4 inline-block cursor-pointer"
            >
                Made on ZAPT
            </a>
        </div>
    );
}
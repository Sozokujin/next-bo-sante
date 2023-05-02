export const ListConsultations = () => {
    return <div className="bg-gray-100 py-12">
    <p id="consultation" className="font-bold text-3xl text-center mx-auto pb-2.5">Consultations</p>
    <p className="font-thin text-sm text-center w-2/3 m-auto">Nous apprenons à nous connaître et nous échangeons sur vos habitudes de vie et alimentaires.</p>
    <div className="flex items-center justify-center m-12 gap-20 flex-col lg:flex-row">
        
    <div className="bg-white w-full lg:w-1/3 rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <h2 className="text-xl text-center font-medium py-2">Diététique</h2>
                <ul className="text-center font-thin">
                    <li>Système digestif, Syndrome Intestin Irritable, maladie cœliaque…</li>
                    <li>Digestion difficile</li>
                    <li>Faiblesse hépatique, pancréatique, intestinale…</li>
                    <li>Taux de cholestérol déréglé, diabète</li>
                    <li>Rééquilibrage alimentaire</li>
                    <li>Intolérances alimentaires</li>
                    <li>•••</li>

                </ul>
            </div>
        </div>

        <div className="bg-white w-full lg:w-1/3 rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <h2 className="text-xl text-center font-medium py-2">Naturopathie</h2>
                <ul className="text-center font-thin">
                    <li>Asthme, allergies, sinusite</li>
                    <li>Céphalées, migraines</li>
                    <li>Problème de sommeil, fatigue chronique</li>
                    <li>Stress, burn-out, dépression</li>
                    <li>Inconvénients liés à la ménopause, absence ou douleurs de règles</li>
                    <li>•••</li>
                </ul>
            </div>
        </div>

        <div className="bg-white w-full lg:w-1/3 rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <h2 className="text-xl text-center font-medium py-2">Dien Chan</h2>
                <ul className="text-center font-thin">
                    <li>Problème de peau</li>
                    <li>Douleurs chroniques ou aiguës </li>
                    <li>Troubles digestif</li>
                    <li>Stress, anxiété, angoisses</li>
                    <li>Troubles du sommeil</li>
                    <li>Asthme, allergies</li>
                    <li>•••</li>
                </ul>
            </div>
        </div>
    </div>
    <a type="button" href="https://www.doctolib.fr/dieteticien/roanne/oceane-banhegyi" target="_blank" rel="noopener noreferrer" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-gradient-to-r from-green-600 via-green-700 to-green-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">Prendre rendez-vous</a>
    </div>
}
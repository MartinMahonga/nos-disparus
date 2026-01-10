import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#001219]">
      {/* Background avec image et filtres superposés */}
      <div 
        className="absolute inset-0 z-0 bg-[url('@/src/assets/images/grille.png')] bg-contain bg-repeat opacity-40 transition-transform duration-1000 hover:scale-105"
      >
        {/* Couche 1 : Filtre Radiant Linéaire (Bleu Profond vers Ambre subtil) */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#041e28] via-transparent to-amber-900/10"></div>
        
        {/* Couche 2 : Gradient directionnel pour la lisibilité (Bleu Profond à gauche) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#041e28] via-[#041e28]/80 to-transparent"></div>
      </div>

      {/* Contenu du Hero */}
      <div className="container flex justify-around relative px-6 md:py-20 py-5 mx-auto">
        <div className="max-w-3xl">
          <h1 className="mb-6 text-4xl font-black leading-[1.1] md:text-7xl text-white drop-shadow-2xl">
            Aidez-nous à <br />
            <span className="text-accent italic">les retrouver.</span>
          </h1>
          
          <p className="mb-10 text-sm leading-relaxed text-blue-100/80 md:text-xl font-light max-w-2xl">
            Ne laissez plus un avis de recherche se perdre dans un flux de messages. 
            Publiez, vérifiez et signalez en temps réel pour sauver des vies.
          </p>

          <div className="flex flex-col gap-5 sm:flex-row">
            {/* Bouton Ambre - Action Prioritaire (Alerte) */}
            <Link href="/report" className="px-8 py-4 md:text-lg text-sm font-bold uppercase transition-all bg-accent/80 text-white rounded-[0.75rem] hover:bg-accent hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] active:scale-95 border-b-4 border-blue-900">
              SIGNALER UNE DISPARITION
            </Link>
            
            {/* Bouton Bleu Profond - Consultation */}
            <button className="px-8 py-4 md:text-lg text-sm font-bold uppercase transition-all bg-blue-900/40 text-blue-100 border border-blue-400/30 rounded-lg hover:bg-blue-800/60 backdrop-blur-md active:scale-95">
              VOIR LES ALERTES EN COURS
            </button>
          </div>
          
          {/* Badge d'activité dynamique */}
          <div className="flex items-center gap-3 mt-12 px-5 py-2.5 bg-blue-950/50 backdrop-blur-md border border-blue-400/20 rounded-full w-fit md:text-sm text-xs font-medium text-amber-200/90 shadow-inner">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
            </span>
            <span className="tracking-wide">15 ALERTES ACTIVES DANS VOTRE ZONE</span>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}
// // src/app/page.tsx
// import {Header} from '@/components/layout/Header';
// import {Footer} from '@/components/layout/Footer';
// import {Hero} from '@/components/landing/Hero';
// import {Status} from '@/components/landing/Status';
// import {Features} from '@/components/landing/Features';
// import {News} from '@/components/landing/News';
// import {DigitalRain} from '@/components/cyberpunk'; // DigitalRain 更适合做背景
//
// export default function HomePage() {
//     return (
//         <div className="bg-nexus-dark text-nexus-text">
//             {/* 全局背景特效 */}
//             <DigitalRain density={0.3} speed={0.5} binary/>
//
//             <div className="relative z-10">
//                 <Header/>
//                 <main>
//                     <Hero/>
//                     <Status/>
//                     <Features/>
//                     <News/>
//                 </main>
//                 <Footer/>
//             </div>
//         </div>
//     );
// }

import NexusKPoster from '@/components/NexusKPoster';

function App() {
    return (
        <div className="App">
            <NexusKPoster />
        </div>
    );
}

export default App;
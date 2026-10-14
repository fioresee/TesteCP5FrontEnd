import Card from '../components/Card'
import JogoImg1 from '../assets/urso.png'
import JogoImg2 from '../assets/carro.png'
import JogoImg3 from '../assets/boneca.png'
import JogoImg4 from '../assets/robo.png'

const Home = () => {
  const games = [
    { id: 1, titulo: "Urso de Pelúcia", preco: "R$ 59,90", imagem: JogoImg1 },
    { id: 2, titulo: "Carro de Brinquedo", preco: "R$ 39,90", imagem: JogoImg2 },
    { id: 3, titulo: "Boneca", preco: "R$ 69,90", imagem: JogoImg3 },
    { id: 4, titulo: "Robô de Brinquedo", preco: "R$ 119,90", imagem: JogoImg4 }
  ];

  return (
    <main className="px-[5%] mt-10 mb-16 grow bg-[#E5D5C3]">

      <h2 className="titulo text-3xl font-bold text-[#5C493B] mb-8 animate-[fadeIn_0.8s_ease-out]">Brinquedos em Destaque</h2>

      <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">

        {games.map((game, index) => (

          <div key={game.id} className="animate-[fadeInUp_0.6s_ease-out_both]" style={{ animationDelay: `${index * 150}ms` }}>

            <Card
              titulo={game.titulo}
              preco={game.preco}
              imagem={game.imagem}
            />

          </div>
        ))}

      </section>

    </main>
  )
}

export default Home
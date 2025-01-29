import React from 'react';
import { Menu, UtensilsCrossed, Flame, Sandwich, Salad, Coffee, IceCream2, Instagram, Facebook, MapPin, Phone, Clock } from 'lucide-react';

function MenuItem({ title, description, price }: { title: string; description: string; price?: string }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-baseline">
        <h3 className="text-xl font-semibold text-amber-800">{title}</h3>
        {price && <span className="text-lg font-medium text-amber-700">{price}</span>}
      </div>
      <p className="text-gray-600 italic">{description}</p>
    </div>
  );
}

function MenuSection({ title, icon: Icon, children }: { title: string; icon: React.ElementType; children: React.ReactNode }) {
  return (
    <section className="mb-12 p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <Icon className="w-6 h-6 text-amber-600" />
        <h2 className="text-2xl font-serif text-amber-900">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?auto=format&fit=crop&q=80')] bg-cover bg-fixed">
      <div className="bg-amber-50/90 min-h-screen">
        {/* Hero Section */}
        <header className="text-center py-20 bg-black/40 text-white">
          <h1 className="font-serif text-6xl mb-4">Viago Lanches</h1>
          <p className="text-xl italic">Sabor que Encanta, Qualidade que Surpreende</p>
        </header>

        {/* Menu Content */}
        <main className="container mx-auto px-4 py-12 max-w-4xl">
          <MenuSection title="Para Começar" icon={UtensilsCrossed}>
            <MenuItem 
              title="Bolinhos de Queijo com Requeijão Cremoso"
              description="Feitos com queijo artesanal, crocantes por fora e macios por dentro."
            />
            <MenuItem 
              title="Nachos com Guacamole e Queijo Derretido"
              description="Tortilhas crocantes servidas com guacamole fresco e queijo gratinado."
            />
            <MenuItem 
              title="Anéis de Cebola Empanados"
              description="Acompanha molho barbecue caseiro."
            />
          </MenuSection>

          <MenuSection title="Especialidades da Casa" icon={Flame}>
            <MenuItem 
              title="Viago Clássico"
              description="Pão brioche, hambúrguer 180g, queijo cheddar, bacon crocante, alface, tomate e molho especial."
            />
            <MenuItem 
              title="Viago Picante"
              description="Hambúrguer 180g, queijo pepper jack, pimentões jalapeños, cebola caramelizada e molho de pimenta."
            />
            <MenuItem 
              title="Viago Vegano"
              description="Hambúrguer de grão-de-bico, pão integral, alface, tomate, cebola roxa e maionese vegana."
            />
          </MenuSection>

          <MenuSection title="Sanduíches que Inspiram" icon={Sandwich}>
            <MenuItem 
              title="Frango Grelhado com Abacate"
              description="Peito de frango grelhado, abacate, rúcula, tomate seco e maionese de ervas."
            />
            <MenuItem 
              title="Carne Louca com Queijo Brie"
              description="Carne desfiada, queijo brie derretido, cebola caramelizada e molho de mostarda e mel."
            />
            <MenuItem 
              title="Caprese no Pão Ciabatta"
              description="Muçarela de búfala, tomate fresco, manjericão e azeite de oliva extravirgem."
            />
          </MenuSection>

          <MenuSection title="Leve e Saudável" icon={Salad}>
            <MenuItem 
              title="Salada Caesar com Frango Grelhado"
              description="Alface romana, croutons, queijo parmesão e molho caesar."
            />
            <MenuItem 
              title="Salada Mediterrânea"
              description="Rúcula, tomate cereja, pepino, azeitonas, queijo feta e vinagrete de limão."
            />
            <MenuItem 
              title="Wrap de Frango com Vegetais"
              description="Tortilla integral, frango grelhado, alface, cenoura e molho de iogurte."
            />
          </MenuSection>

          <MenuSection title="Para Acompanhar" icon={Coffee}>
            <MenuItem 
              title="Refrigerantes Artesanais"
              description="Sabores como limão siciliano, laranja sanguínea e gengibre."
            />
            <MenuItem 
              title="Sucos Naturais"
              description="Laranja, abacaxi com hortelã, morango e maracujá."
            />
            <MenuItem 
              title="Chá Gelado com Pêssego"
              description="Feito na hora, com toque de pêssego fresco."
            />
          </MenuSection>

          <MenuSection title="Doces Finales" icon={IceCream2}>
            <MenuItem 
              title="Brownie com Sorvete de Baunilha"
              description="Brownie quentinho, sorvete artesanal e calda de chocolate."
            />
            <MenuItem 
              title="Cheesecake de Frutas Vermelhas"
              description="Base de biscoito, creme de queijo suave e cobertura de frutas vermelhas."
            />
            <MenuItem 
              title="Mousse de Maracujá"
              description="Cremoso e refrescante, com calda de maracujá."
            />
          </MenuSection>
        </main>

        {/* Footer */}
        <footer className="bg-amber-900 text-amber-50 py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Informações</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Rua Saborosa, 123 – Centro
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    (11) 1234-5678
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Segunda a Sábado, das 11h às 22h
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
                <div className="flex gap-4">
                  <a href="https://instagram.com/ViagoLanches" className="hover:text-amber-300 transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="https://facebook.com/ViagoLanches" className="hover:text-amber-300 transition-colors">
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
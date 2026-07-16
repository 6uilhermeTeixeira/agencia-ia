import { StrictMode, useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowLeft, ArrowRight, ExternalLink, Search, Sparkles } from "lucide-react";
import {
  buildWhatsAppUrl,
  categories,
  getProductBySlug,
  products,
  type AiProduct,
  type ProductCategory,
} from "./products";
import "./styles.css";

type CategoryFilter = "Todos" | ProductCategory;

function navigateTo(path: string) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function usePathname() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return pathname;
}

function Header() {
  return (
    <header className="site-header">
      <a
        className="brand"
        href="/"
        onClick={(event) => {
          event.preventDefault();
          navigateTo("/");
        }}
        aria-label="Agência IA"
      >
        <span className="brand-mark">AI</span>
        <span>Agência IA</span>
      </a>
      <nav className="top-nav" aria-label="Navegação principal">
        <a href="/#produtos">Produtos</a>
        <a href="/#contato">Contato</a>
      </nav>
    </header>
  );
}

function HomePage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("Todos");
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory = activeCategory === "Todos" || product.category === activeCategory;
      const matchesQuery =
        !normalizedQuery ||
        `${product.title} ${product.shortDescription} ${product.category}`
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <>
      <Hero />
      <main>
        <section className="catalog-section" id="produtos" aria-labelledby="products-title">
          <div className="section-heading">
            <p className="eyebrow">Catálogo de produtos</p>
            <h2 id="products-title">15 frentes de IA para transformar operação em produto.</h2>
          </div>

          <div className="catalog-toolbar">
            <label className="search-box">
              <Search size={18} aria-hidden="true" />
              <span className="sr-only">Buscar produto</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar por produto, mercado ou categoria"
              />
            </label>

            <div className="filter-row" aria-label="Filtrar por categoria">
              {categories.map((category) => (
                <button
                  key={category}
                  className="filter-button"
                  data-active={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                  type="button"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="product-grid" data-filtered-count={filteredProducts.length}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="empty-state">
              <h3>Nenhum produto encontrado</h3>
              <p>Limpe a busca ou selecione outra categoria para ver o catálogo completo.</p>
            </div>
          ) : null}
        </section>

        <section className="contact-band" id="contato" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">Próximo passo</p>
            <h2 id="contact-title">Escolha um produto e abrimos a conversa com contexto.</h2>
          </div>
          <p>
            O número de WhatsApp fica configurado em <code>VITE_WHATSAPP_NUMBER</code>. Até lá, os
            CTAs mostram o caminho sem expor um contato provisório.
          </p>
        </section>
      </main>
    </>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">
          <Sparkles size={16} aria-hidden="true" />
          Agência de produtos de IA
        </p>
        <h1>Produtos de IA para empresas que precisam sair do improviso.</h1>
        <p className="hero-text">
          Um catálogo B2B com soluções para governança, indústria, energia, finanças, setor público
          e operações que já sentem o impacto da IA no dia a dia.
        </p>
        <div className="hero-actions">
          <a href="#produtos" className="primary-action">
            Ver produtos
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a href="#contato" className="secondary-action">
            Configurar contato
          </a>
        </div>
      </div>

      <div className="signal-panel" aria-label="Resumo do catálogo">
        <div className="signal-row">
          <span>15</span>
          <p>produtos prontos para diagnóstico comercial</p>
        </div>
        <div className="signal-row">
          <span>6</span>
          <p>categorias de mercado com dores claras</p>
        </div>
        <div className="signal-row">
          <span>MVP</span>
          <p>páginas comerciais com problema, solução, mercado e stack</p>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: AiProduct }) {
  const Icon = product.icon;

  return (
    <article className="product-card">
      <div className="card-topline">
        <span className="icon-badge">
          <Icon size={20} aria-hidden="true" />
        </span>
        <span className="category-pill">{product.category}</span>
      </div>
      <h3>{product.title}</h3>
      <p>{product.shortDescription}</p>
      <a
        href={`/servicos/${product.slug}`}
        onClick={(event) => {
          event.preventDefault();
          navigateTo(`/servicos/${product.slug}`);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Ver serviço
        <ArrowRight size={17} aria-hidden="true" />
      </a>
    </article>
  );
}

function DetailPage({ product }: { product: AiProduct }) {
  const Icon = product.icon;
  const whatsappUrl = buildWhatsAppUrl(product);

  return (
    <main className="detail-page">
      <a
        className="back-link"
        href="/"
        onClick={(event) => {
          event.preventDefault();
          navigateTo("/");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <ArrowLeft size={18} aria-hidden="true" />
        Voltar ao catálogo
      </a>

      <section className="detail-hero">
        <div>
          <p className="eyebrow">
            <Icon size={16} aria-hidden="true" />
            {product.category}
          </p>
          <h1>{product.title}</h1>
          <p>{product.shortDescription}</p>
        </div>
        <div className="detail-cta">
          {whatsappUrl ? (
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="primary-action">
              Conversar no WhatsApp
              <ExternalLink size={18} aria-hidden="true" />
            </a>
          ) : (
            <a href="/#contato" className="primary-action muted-action">
              Configurar WhatsApp
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          )}
          <p>Mensagem: {product.whatsappMessage}</p>
        </div>
      </section>

      <section className="detail-grid" aria-label="Descrição do serviço">
        <InfoBlock title="Problema" content={product.problem} />
        <InfoBlock title="Produto" content={product.solution} />
        <InfoBlock title="Mercado" content={product.market} />
        <ListBlock title="Tecnologia sugerida" items={product.technologies} />
        <ListBlock title="Entregáveis" items={product.deliverables} />
      </section>
    </main>
  );
}

function InfoBlock({ title, content }: { title: string; content: string }) {
  return (
    <article className="info-block">
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="info-block">
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function NotFoundPage() {
  return (
    <main className="not-found">
      <p className="eyebrow">Serviço não encontrado</p>
      <h1>Esse produto ainda não existe no catálogo.</h1>
      <button type="button" className="primary-action" onClick={() => navigateTo("/")}>
        Voltar ao catálogo
        <ArrowRight size={18} aria-hidden="true" />
      </button>
    </main>
  );
}

function App() {
  const pathname = usePathname();
  const serviceMatch = pathname.match(/^\/servicos\/([^/]+)$/);
  const product = serviceMatch ? getProductBySlug(serviceMatch[1]) : undefined;

  return (
    <>
      <Header />
      {pathname === "/" ? <HomePage /> : product ? <DetailPage product={product} /> : <NotFoundPage />}
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

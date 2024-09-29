import Image from "next/image";
import appleStore from "./img/apple.png";
import googlePlay from "./img/google.png";
import instagramLogo from "./img/insta-logo.png";
import instagramPhone from "./img/insta-img.png";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-8">
      <div className="flex max-w-4xl items-center justify-center">
        <div className="hidden md:block">
          <Image src={instagramPhone} alt="Instagram phone" width={380} height={600} />
        </div>

        <div className="w-full max-w-md">
          <div className="bg-white border border-gray-300 p-8 mb-4 rounded">
            <div className="flex justify-center mb-6">
              <Image src={instagramLogo} alt="Instagram Logo" width={180} height={50} />
            </div>

            <form>
              <input
                type="text"
                placeholder="Número de Telefone, nome de usuário ou email"
                className="w-full p-2 border border-gray-300 rounded bg-gray-100 mb-3"
              />
              <input
                type="password"
                placeholder="Senha"
                className="w-full p-2 border border-gray-300 rounded bg-gray-100 mb-3"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded font-semibold"
              >
                Entrar
              </button>
            </form>

            <div className="flex items-center justify-between mt-4">
              <span className="h-px w-full bg-gray-300"></span>
              <span className="mx-4 text-gray-400 font-semibold">OU</span>
              <span className="h-px w-full bg-gray-300"></span>
            </div>

            <div className="mt-4 text-center">
              <a href="#" className="text-blue-500 font-semibold">Logar com o Facebook</a>
            </div>

            <a href="#" className="text-sm text-gray-500 mt-4 text-center block">
              Esqueceu sua senha?
            </a>
          </div>

          <div className="bg-white border border-gray-300 p-4 text-center rounded">
            <p className="text-sm">
              Não tem uma conta? <a href="#" className="text-blue-500 font-semibold">Cadastre-se</a>
            </p>
          </div>

          <div className="text-center mt-4">
            <p>Baixe o aplicativo</p>
            <div className="flex justify-center gap-4 mt-4">
              <Image src={appleStore} alt="Baixar na Apple Store" width={136} height={40} />
              <Image src={googlePlay} alt="Baixar na Google Play" width={136} height={40} />
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-8 text-gray-400 text-sm">
        <ul className="flex justify-center gap-4 mb-4">
          <li>Meta</li>
          <li>Sobre</li>
          <li>Blog</li>
          <li>API</li>
          <li>Privacidade</li>
          <li>Termos</li>
          <li>Localizações</li>
        </ul>
        <p>Português (Brasil) © 2024 Instagram from Meta</p>
      </footer>
    </div>
  );
}
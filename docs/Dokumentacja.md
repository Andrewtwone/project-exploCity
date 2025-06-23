

**Dokumentacja projektu ExploCity**

---

**1. Wstęp**

Celem projektu ExploCity było stworzenie platformy internetowej, która umożliwia mieszkańcom oraz turystom przeglądanie wydarzeń i atrakcji odbywających się w mieście. Aplikacja pomaga w planowaniu czasu wolnego i stanowi centralne źródło informacji o aktualnych aktywnościach kulturalnych, rozrywkowych i turystycznych.

Zakres projektu obejmuje stworzenie aplikacji webowej z oddzielnymi interfejsami dla użytkowników oraz administratorów. Projekt składa się z części frontendowej (React), backendowej (Spring Boot), bazy danych (MongoDB) oraz infrastruktury do przechowywania plików (AWS S3). Użytkownicy mogą przeglądać wydarzenia, logować się, zarządzać swoim koszykiem, natomiast administratorzy mają możliwość zarządzania wydarzeniami.

Pomysł na projekt wynikał z obserwacji rosnącego zapotrzebowania na cyfrowe narzędzia umożliwiające szybki dostęp do informacji o wydarzeniach miejskich. Brakowało jednego, centralnego miejsca, które w prosty sposób agregowałoby takie dane.

---

**2. Opis funkcjonalny serwisu**

Użytkownik może:

* przeglądać wszystkie dostępne wydarzenia na stronie głównej,
* otworzyć szczegóły wydarzenia z dokładnym opisem, ceną oraz zdjęciem,
* zarejestrować konto i zalogować się do systemu,
* dodawać i usuwać wydarzenia z koszyka.

Administrator ma dostęp do osobnego panelu zarządzania, który umożliwia:

* dodawanie nowych wydarzeń (wraz ze zdjęciami),
* usuwanie istniejących wydarzeń.

Strony aplikacji:

* Strona główna (/) – wyświetla wszystkie wydarzenia w formie siatki.
* Szczegóły wydarzenia (/sights/\:id) – zawiera informacje o wybranej atrakcji.
* Logowanie (/login) – umożliwia zalogowanie użytkownika.
* Rejestracja (/register) – umożliwia utworzenie nowego konta.
* Koszyk (/cart) – pokazuje zawartość koszyka danego użytkownika.
* Panel administracyjny (port 3001) – interfejs do zarządzania wydarzeniami.

Działanie względem typu użytkownika:

* Gość (niezalogowany) – może tylko przeglądać wydarzenia i ich szczegóły.
* Zalogowany użytkownik – dodatkowo może zarządzać koszykiem.
* Administrator – ma pełny dostęp do systemu zarządzania wydarzeniami.

---

**3. Technologie wykorzystane w projekcie**

Backend aplikacji został stworzony w języku Java przy użyciu frameworka Spring Boot 3 (Java 17). Użyto m.in. Spring Security do zarządzania autoryzacją, Spring Data do integracji z bazą danych oraz JWT do obsługi logowania.

Frontend, zarówno dla użytkownika, jak i administratora, oparty został o bibliotekę React w wersji 19 oraz bundler Vite. Pozwoliło to na szybkie tworzenie dynamicznych interfejsów użytkownika.

Dane są przechowywane w dokumentowej bazie danych MongoDB 6, która dobrze sprawdza się w projektach o zmiennej strukturze danych. Do przechowywania plików (np. zdjęć wydarzeń) wykorzystano usługę AWS S3.

Całość została zintegrowana za pomocą Dockera i uruchamiana przy pomocy pliku `docker-compose.yml`, co umożliwia łatwe wdrażanie i testowanie systemu w różnych środowiskach.

Do komunikacji między frontendem a backendem użyto biblioteki Axios, a do stylizacji – frameworka Bootstrap, co zapewniło responsywny wygląd aplikacji.

---

**4. Struktura plików i katalogów projektu**

Projekt zorganizowano w jednym repozytorium, w którym znajdują się wszystkie komponenty:

* Katalog główny:

  * `docker-compose.yml` – konfiguracja środowiska i kontenerów.
* Backend (`/backend`):

  * Spring Boot z katalogami:

    * `config` – konfiguracja bezpieczeństwa i połączeń.
    * `controller` – REST API.
    * `entity`, `repository`, `service` – odpowiednio: modele, repozytoria i logika biznesowa.
  * `pom.xml` – plik zarządzający zależnościami Mavena.
  * `Dockerfile` – obraz Dockera dla backendu.
* Frontend (`/frontend`):

  * `exploCity` – aplikacja dla użytkowników.
  * `adminpanel` – aplikacja administracyjna.
  * W obu projektach znajdują się katalogi:

    * `components`, `pages`, `service` – komponenty, widoki i logika komunikacji z API.
    * `Dockerfile` – obraz Dockera dla frontendów.
* `/mongo-init` – skrypt do inicjalizacji MongoDB przy starcie kontenera.

---

**5. Baza danych i API**

W bazie danych znajdują się trzy główne kolekcje:

* `sights` – informacje o wydarzeniach: nazwa, opis, cena, kategoria, link do zdjęcia.
* `users` – dane użytkowników: e-mail, hasło (zaszyfrowane), role.
* `carts` – koszyki użytkowników: identyfikator użytkownika oraz lista wybranych wydarzeń.

Najważniejsze endpointy API:

* Autoryzacja:

  * POST `/login` – logowanie, zwraca token JWT.
  * POST `/register` – rejestracja nowego konta.
* Operacje na wydarzeniach:

  * GET `/sights` – lista wszystkich wydarzeń.
  * GET `/sights/{id}` – szczegóły wybranego wydarzenia.
  * POST `/sights` – dodanie nowego wydarzenia (wymaga JWT i roli admina).
  * DELETE `/sights/{id}` – usunięcie wydarzenia (admin).
* Koszyk:

  * GET `/cart` – zawartość koszyka.
  * POST `/cart` – dodanie wydarzenia do koszyka.
  * DELETE `/cart/items/{itemId}` – usunięcie pozycji z koszyka.

---

**6. Proces tworzenia projektu**

Projekt rozpoczął się od fazy planowania architektury oraz wyboru stosu technologicznego. Następnie przygotowano backend, definiując modele, kontrolery oraz logikę biznesową. Po skonfigurowaniu bazy danych i integracji z AWS S3 zaimplementowano zabezpieczenia i uwierzytelnianie za pomocą JWT.

Frontend został zaimplementowany jako dwie niezależne aplikacje React – jedna dla użytkownika, druga dla administratora. Zadbano o estetykę i responsywność widoków oraz pełną komunikację z backendem.

Na końcu całość została zintegrowana i uruchamiana za pomocą Dockera. Testowanie odbywało się ręcznie za pomocą Postmana oraz przeglądarki.

Największe trudności:

* Konfiguracja CORS – rozwiązano problem przez odpowiednie ustawienia w Spring Security.
* Wysyłanie plików na S3 – wymagało poprawnej konfiguracji AWS i bezpiecznego przechowywania kluczy.
* Zmienne środowiskowe – skonfigurowano za pomocą `docker-compose.yml`.


# restaurantclub-logic

Uwagi:
- Ścieżka `/init` powinna być częścią ścieżki `/project`, tj. `/project/init`
- W ścieżce `/project/{id}/` występuje powtórzenie informacji o id. Zamiast powtarzać, odpowiedzią powinnien być sam obiekt w parametrze `project`
- Id elementów w niektórych projektach się powtarzają
- Należy stworzyć testy jednostkowe sprawdzające poprawność pobierania danych z serwera, walidacji danych o projektach, a także poprawności renderowania przy przypadkach krańcowych

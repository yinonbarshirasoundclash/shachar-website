# Daily challenge files – חידון ה-NBA הגדול

One file per day: `YYYY-MM-DD.json` (Israel date). The app loads `daily/<today>.json`; if it is missing or invalid, it falls back to questions from the built-in bank.

Format:
```json
{"date":"2026-11-25","questions":[
  {"q":"שאלה?","a":"התשובה הנכונה","opts":["התשובה הנכונה","מסיח","מסיח","מסיח"],"tag":"🗓️ מהלילה","ex":"הסבר קצר עם המספר/ההקשר"}
]}
```
Exactly 5 questions; `opts` has exactly 4 distinct strings and contains `a` verbatim. The app shuffles the options.
Tags: `🗓️ מהלילה`, `📊 הטבלה`, `📈 מובילי הליגה`, `🧤 הסטטיסטיקה השקטה`, `🎤 ציטוט הלילה`.
Written automatically every morning by a scheduled task.


CREATE TABLE words (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    pos TEXT
    word TEXT NOT NULL
    definition TEXT
    frequency INTEGER
);

CREATE TABLE legend (
    id INTEGER PRIMARY KEY
    word_id INTEGER
    country VARCHAR
    lange VARCHAR
    symbol VARCHAR
    FOREIGN KEY(word_id) REFERENCES words(id)
)

CREATE TABLE synonyms (
    id INTEGER PRIMARY KEY,
    word_id INTEGER,
    synonym_id INTEGER,
    FOREIGN KEY(word_id) REFERENCES words(id),
    FOREIGN KEY(synonym_id) REFERENCES words(id)
);

CREATE TABLE antonyms (
    id INTEGER PRIMARY KEY,
    word_id INTEGER,
    antonym_id INTEGER,
    FOREIGN KEY(word_id) REFERENCES words(id),
    FOREIGN KEY(antonym_id) REFERENCES words(id)
);

CREATE TABLE etymologies (
    id INTEGER PRIMARY KEY,
    word_id INTEGER,
    etymology TEXT NOT NULL,
    FOREIGN KEY(word_id) REFERENCES words(id)
);



-- Insert words
INSERT INTO words (word, definition, frequency) VALUES ('happy', 'Feeling or showing pleasure or contentment', 5000);
INSERT INTO words (word, definition, frequency) VALUES ('joyful', 'Feeling, expressing, or causing great pleasure and happiness', 3000);
INSERT INTO words (word, definition, frequency) VALUES ('sad', 'Feeling or showing sorrow; unhappy', 4000);
INSERT INTO words (word, definition, frequency) VALUES ('glad', 'Feeling pleasure or happiness', 3500);

-- Get the inserted IDs
SELECT * FROM words;

-- Using the IDs from the above SELECT statement, insert synonyms
INSERT INTO synonyms (word_id, synonym_id) VALUES (1, 2);
INSERT INTO synonyms (word_id, synonym_id) VALUES (1, 4);
INSERT INTO synonyms (word_id, synonym_id) VALUES (2, 4);

-- Insert antonyms
INSERT INTO antonyms (word_id, antonym_id) VALUES (1, 3);
INSERT INTO antonyms (word_id, antonym_id) VALUES (2, 3);
INSERT INTO antonyms (word_id, antonym_id) VALUES (4, 3);

-- Insert etymologies
INSERT INTO etymologies (word_id, etymology) VALUES (1, 'From Middle English hap, from Old Norse happ, meaning "good fortune"');
INSERT INTO etymologies (word_id, etymology) VALUES (2, 'From Latin gaudium, meaning "joy"');
INSERT INTO etymologies (word_id, etymology) VALUES (3, 'From Old English sæd, meaning "sated, full"');
INSERT INTO etymologies (word_id, etymology) VALUES (4, 'From Middle English glade, from Old English glæd, meaning "bright, shining"');


--@block
SELECT w.word
FROM synonyms s
JOIN words w ON s.synonym_id = w.id
WHERE s.word_id = (SELECT id FROM words WHERE word = 'happy');

--@block
SELECT w.word
FROM antonyms a
JOIN words w ON a.antonym_id = w.id
WHERE a.word_id = (SELECT id FROM words WHERE word = 'happy');

--@block
SELECT etymology FROM etymologies WHERE word_id = (SELECT id FROM words WHERE word = 'happy');

# rick-and-morty

the project is about getting the rick and morty characters


## Solution Architecture


![architecture diagram](https://github.com/dejaramillo/rick-and-morty/assets/56326334/d6929dc0-afa2-4a0a-b745-43abae8cde67)

It is basically a mvc architecture, where all processes are managed by the controller. In the model the processes are managed with the database.

### Data Model

![data-model-diagram](https://github.com/dejaramillo/rick-and-morty/assets/56326334/db981e6f-eb0b-4875-8e3d-683a9c7c0ed0)

## How to run the project

### Run Local Data Bases 
You can use the docker-compose.yaml file in the root directory to run postgres db  and redis cache db
```
docker-compose up --build
```
If you need to change the environment variables inside the docker-compose.yaml file.

### npm way

Install dependencies.

Run `npm install`

### Run Migrations

Run migrations for the project tables 

Run `npm run migrate`

Run seeds for migration of data

Run `npm run migrate`

### Run Project

for run project, you must compile the project with:

Run `npm run build`

After you must execute the next command to run project.

Run `npm start`

# GraphQL API Documentation

## General Schema

This API provides detailed information about characters, including identity, status, species, type, gender, origin and current locations, image, episodes appeared in, reference URL, and creation date. The main query allows filtering characters by various criteria.

## Types

### `Location`

Represents a location associated with a character.

- `name`: String - The name of the location (e.g., planet, city).
- `url`: String - URL for more information about the location.

### `Character`

Details of a particular character.

- `id`: ID! - Unique identifier of the character.
- `name`: String! - Name of the character.
- `status`: String - Status of the character (alive, dead, unknown).
- `species`: String - Species of the character.
- `type`: String - Type or classification of the character (human, alien).
- `gender`: String - Gender of the character.
- `origin`: Location - Origin location of the character.
- `location`: Location - Current location of the character.
- `image`: String - URL of the character's image.
- `episode`: [String] - List of episodes the character appears in.
- `url`: String - URL for more information about the character.
- `created`: String - Date the character record was created.

## Queries

### `characters`

Allows querying characters by name, status, species, gender, and origin location.

- Arguments:
    - `name`: String (optional) - Filter characters by name.
    - `status`: String (optional) - Filter characters by status.
    - `species`: String (optional) - Filter characters by species.
    - `gender`: String (optional) - Filter characters by gender.
    - `originName`: String (optional) - Origin location name for filtering.
    - `originUrl`: String (optional) - Origin location URL for filtering.



# Limitations - Comments and Improvements

- The clearest improvement opportunity is an error handler which customizes the type of error based on the business.
    
- In addition to this we should end up with at least 85% code coverage.

- A limitation I had was the use of local redis, which generated conflicts to virtualize everything in a docker environment with docker compose.

- The use of @ts-ignore was to omit some processes that could not be typed in a direct way but avoiding that they were generated in a return value or in a parameter, basically it was used for calling attributes of an interface.
# generates the statistics for the data and puts them in json file

import json
import os

from SPARQLWrapper import SPARQLWrapper, JSON


def sparql_query(query):
    sparql = SPARQLWrapper("http://data.judaicalink.org/sparql/query")

    sparql.setQuery(query)

    try:
        sparql.setReturnFormat(JSON)
        results = sparql.query().convert()

        return results

    except Exception as e:
        print('Error fetching data: ', e)

        return None


# List all datasets
def sum_datasets():
    query = """
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    SELECT (COUNT(DISTINCT ?graph) AS ?datasetCount)
    WHERE {
      GRAPH ?graph {
        ?sub ?pred ?obj
      }
    }
    """
    results = sparql_query(query)

    counter = 0

    for _ in enumerate(results['results']['bindings']):
        counter += 1

    if counter == 0:
        raise Exception('Error fetching data')

    return counter - 6


# Count all entities
def sum_entities():
    query = """
    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
    PREFIX owl: <http://www.w3.org/2002/07/owl#>
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    
    SELECT (COUNT(DISTINCT ?subject) AS ?entityCount)
    WHERE {
      GRAPH ?graph {
        ?subject ?predicate ?object
      }
    }
    """
    results = sparql_query(query)
    if results is None:
        raise Exception('Error fetching data')
    else:
        return results['results']['bindings'][0]['entityCount']['value']


# Count all triples
def sum_triples():
    query = """
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    SELECT (COUNT(*) AS ?tripleCount)
    WHERE {
      GRAPH ?graph {
        ?sub ?pred ?obj
      }
    }
    """

    results = sparql_query(query)
    if results is None:
        raise Exception('Error fetching data')
    else:
        return results['results']['bindings'][0]['tripleCount']['value']


def generate_html_file():
    path = os.path.join('./layouts/partials/')

    try:
        entities = sum_entities()
        datasets = sum_datasets()
        triples = sum_triples()

        html_string = '<div class="text-center">Currently, we provide data about <b class="counter" akhi="' + str(
            entities) + '">0</b><b> entities</b>, consisting of <b class="counter" akhi="' + str(
            triples) + '">0</b><b> triples</b>, within <b class="counter" akhi="' + str(
            datasets) + '">0</b><b> different datasets</b>.</div>'

        print('Statistics generated: Entities {}, Triples {}, Datasets {}'.format(entities, triples, datasets))
    except Exception as e:
        print('Error fetching data: ', e)
        html_string = ''

    # if path does not exist, create it
    if not os.path.exists(path):
        os.makedirs(path)

    with open(path + 'statistics.html', 'w') as f:
        f.write(html_string)
    f.close()


def generate_statistics():
    statistics = {
        'datasets': sum_datasets(),
        'entity_pages': sum_entities(),
        'triples': sum_triples()
    }

    # path is the root of the project
    path = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

    # save statistics to json file
    with open(path + '/statistics.json', 'w') as f:
        json.dump(statistics, f, indent=4)

    f.close()


generate_html_file()

# load libraries
import sys
from freestiler import freestile_query

# find arguments
input = sys.argv[1]
output = sys.argv[2]
column = sys.argv[3]
max_zoom = int(sys.argv[4])
layer_name = sys.argv[5]
quiet = sys.argv[6] == "0"

# generate query
query = "SELECT \"" + column + "\",\"GEOM\" FROM ST_Read(\"" + input + "\")"

# generate tiles
freestile_query(
    query = query,
    output = output,
    max_zoom = max_zoom,
    layer_name = layer_name,
    quiet = quiet
)

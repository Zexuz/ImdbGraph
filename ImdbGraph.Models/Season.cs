using System.Collections.Generic;

namespace ImdbGraph.Models
{
    public class Season
    {
        public int           Nr       { get; set; }
        public List<Episode> Episodes { get; set; }
    }
}
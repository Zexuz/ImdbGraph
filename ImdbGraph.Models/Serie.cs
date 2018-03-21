using System.Collections.Generic;

namespace ImdbGraph.Models
{
    public class Serie
    {
        public string ImdbId { get; set; }

        public Time Time { get; set; }

        public List<string> Tags { get; set; }

        public string Bio { get; set; }

        public Rating Rating { get; set; }

        public List<Season> Seasons { get; set; }
    }

    public class Time
    {
        public int  StartYear { get; set; }
        public int? EndYear   { get; set; }
    }
}
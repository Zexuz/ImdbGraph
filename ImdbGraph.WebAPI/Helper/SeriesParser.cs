using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using AngleSharp.Dom;
using AngleSharp.Extensions;
using ImdbGraph.Models;

namespace ImdbGraph.WebAPI.Helper
{
    public class SeriesParser : ISeriesParser
    {
        public Task<Serie> ParserFromImdbDocument(IDocument document)
        {
            var serie = new Serie
            {
                ImdbId = GetImdbId(document),
                Bio = GetBio(document),
                Rating = GetRating(document),
                Time = GetRunningPeriod(document),
                Tags = GetTags(document)
            };


            return Task.FromResult(serie);
        }

        private static string GetBio(IDocument document)
        {
            return document.QuerySelector("#pagecontent div.media div.media-body p.plot-description").Text().Trim();
        }

        private static string GetImdbId(IDocument document)
        {
            return document.Head.QuerySelectorAll("meta")
                .Where(e => e.GetAttribute("property") == "pageId")
                .Select(e => e.GetAttribute("content"))
                .FirstOrDefault();
        }

        private static List<string> GetTags(IDocument document)
        {
            var elements = document.QuerySelectorAll("#titleOverview p.infobar.ellipse span.itemprop");

            return elements.Select(tag => tag.TextContent).ToList();
        }

        private static Time GetRunningPeriod(IDocument document)
        {
            var period = new Time();

            var regEx = new Regex(@"\d{4}");

            var text = document.QuerySelector("#titleOverview div.media-body small.sub-header").TextContent.Trim();
            var matches = regEx.Matches(text);

            period.StartYear = int.Parse(matches[0].Value);

            try
            {
                period.EndYear = int.Parse(matches[1].Value);
            }
            catch (Exception)
            {
                // ignored
            }

            return period;
        }

        private static Rating GetRating(IDocument document)
        {
            var rating = new Rating();

            var ratingDom = document.QuerySelector("#ratings-bar span.inline-block");

            var nrOfVotesText = ratingDom.Children.First().TextContent;
            var value = ratingDom.TextContent.Replace(nrOfVotesText, "");
            var nrOfVotes = nrOfVotesText.Replace("/10", "").Replace(",", "");

            rating.NrOfVotes = int.Parse(nrOfVotes);
            rating.Value = double.Parse(value, CultureInfo.InvariantCulture);

            return rating;
        }
    }
}
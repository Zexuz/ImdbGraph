using System;
using System.Linq;
using System.Threading.Tasks;
using AngleSharp;
using AngleSharp.Dom;

namespace ImdbGraph.WebAPI.Services
{
    public class SiteService
    {
        public string BaseUrl { get; }
        public string Path    { get; }

        public SiteService(string baseUrl, string path)
        {
            if(baseUrl.Last() == '/' && path[0] == '/')
                throw new ArgumentException("'/' on both baseUrl and path");
            
            if(baseUrl.Last() != '/' && path[0] != '/')
                throw new ArgumentException("Missing '/' on either baseUrl or path");
            
            BaseUrl = baseUrl;
            Path = path;
        }


        public async Task<IDocument> Scrape()
        {
            var config = Configuration.Default.WithDefaultLoader();
            var document = await BrowsingContext.New(config).OpenAsync(BaseUrl + Path);

            return document;
        }
    }
}
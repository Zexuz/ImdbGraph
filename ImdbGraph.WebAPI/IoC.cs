using Autofac;
using Autofac.Extensions.DependencyInjection;
using ImdbGraph.WebAPI.Helper;
using ImdbGraph.WebAPI.Services;
using Microsoft.Extensions.DependencyInjection;

namespace ImdbGraph.WebAPI
{
    public static class IoC
    {

        public static AutofacServiceProvider Init(IServiceCollection services)
        {
            var builder = new ContainerBuilder();
            
            if (services != null)
                builder.Populate(services);
            

            builder.RegisterType<SeriesParser>().As<ISeriesParser>().SingleInstance();
            builder.RegisterType<ImdbScrapeService>().As<IImdbScrapeService>().SingleInstance();
            
            return new AutofacServiceProvider(builder.Build());
        }
            
        
    }
}
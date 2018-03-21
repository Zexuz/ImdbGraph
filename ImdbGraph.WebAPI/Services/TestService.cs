namespace ImdbGraph.WebAPI.Services
{
    public class TestService:ITestService
    {
        public string Test(string a)
        {
            return $"Test: {a}";
        }
    }

    public interface ITestService
    {
        string Test(string a);
    }
}
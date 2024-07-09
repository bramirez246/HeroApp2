namespace HeroAPI
{
    public class Hero
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Birthplace {  get; set; } = string.Empty;
        public string Universe {  get; set; } = string.Empty;
        public bool IsFavorite { get; set; }
    }
}

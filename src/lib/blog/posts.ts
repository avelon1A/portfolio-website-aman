export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  sections: BlogSection[];
}

export interface BlogSection {
  id: string;
  title: string;
  content: string;
  code?: string;
  language?: string;
  diagram?: string;
  diagramComponent?: "mvvm" | "mvi";
}

export const blogPosts: BlogPost[] = [
  {
    slug: "kotlin-coroutines-best-practices",
    title: "Kotlin Coroutines: Best Practices for Android Developers",
    excerpt: "Master asynchronous programming in Android with these coroutine best practices. Learn how to write efficient, readable, and maintainable code using Kotlin coroutines.",
    date: "2024-03-15",
    readTime: "12 min read",
    category: "Kotlin",
    tags: ["Kotlin", "Coroutines", "Android", "Concurrency"],
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        content: `Kotlin coroutines have revolutionized how we handle asynchronous programming in Android. They provide a way to write asynchronous code that looks synchronous, making it easier to read and maintain.\n\nIn this guide, we'll explore best practices for using coroutines in Android applications, covering everything from basic setup to advanced patterns.`
      },
      {
        id: "structured-concurrency",
        title: "Understanding Structured Concurrency",
        content: `Structured concurrency is the foundation of safe coroutine programming. It ensures that coroutines are properly scoped and managed, preventing memory leaks and resource exhaustion.\n\nWhen a coroutine is launched within a scope, it's tied to that scope's lifecycle. If the scope is cancelled, all its child coroutines are also cancelled automatically.`,
        code: `// Bad: Using GlobalScope\nfun fetchData() {\n    GlobalScope.launch {\n        // This coroutine is not tied to any lifecycle\n    }\n}\n\n// Good: Using a proper scope\nclass ViewModel(\n    private val scope: CoroutineScope = CoroutineScope(Dispatchers.Main.immediate)\n) {\n    fun fetchData() {\n        scope.launch {\n            // This coroutine is properly scoped\n        }\n    }\n}`,
        language: "kotlin"
      },
      {
        id: "error-handling",
        title: "Error Handling Strategies",
        content: `Proper error handling is crucial for robust coroutine-based applications. Kotlin provides several mechanisms for handling errors in coroutines.\n\nException handling can be done at different levels - within the coroutine, using try-catch blocks, or using coroutine exception handlers.`,
        code: `// Using try-catch within coroutine\nlaunch {\n    try {\n        val result = withContext(Dispatchers.IO) {\n            api.fetchData()\n        }\n        // Process result\n    } catch (e: Exception) {\n        // Handle error\n        when (e) {\n            is IOException -> showError("Network error")\n            is HttpException -> showError("Server error")\n            else -> showError("Unknown error")\n        }\n    }\n}\n\n// Using CoroutineExceptionHandler\nval handler = CoroutineExceptionHandler { _, exception ->\n    Log.e("Coroutine", "Caught exception")\n}\n\nscope.launch(handler) {\n    // Exceptions will be handled by the handler\n    throw RuntimeException("Test error")\n}`,
        language: "kotlin"
      },
      {
        id: "dispatchers",
        title: "Choosing the Right Dispatcher",
        content: `Dispatchers determine which thread or thread pool a coroutine runs on. Choosing the right dispatcher is crucial for performance and responsiveness.\n\n- **Dispatchers.Main**: For UI operations and short-lived tasks\n- **Dispatchers.IO**: For network and disk I/O operations\n- **Dispatchers.Default**: For CPU-intensive operations\n- **Dispatchers.Unconfined**: For testing or specialized scenarios`,
        code: `// Using different dispatchers appropriately\nsuspend fun loadData() {\n    withContext(Dispatchers.IO) {\n        // Network or disk I/O\n        val data = api.fetchData()\n        cache.saveData(data)\n    }\n}\n\nsuspend fun processImage(image: Bitmap): Bitmap {\n    return withContext(Dispatchers.Default) {\n        // CPU-intensive image processing\n        image.resize(1024, 1024)\n            .applyFilters()\n            .compress()\n    }\n}\n\n// Using Main dispatcher for UI updates\nsuspend fun updateUI(data: Data) {\n    withContext(Dispatchers.Main) {\n        // Safe to update UI here\n        binding.progressBar.visibility = View.GONE\n        binding.textView.text = data.title\n    }\n}`,
        language: "kotlin"
      },
      {
        id: "flow-integration",
        title: "Integrating with Flow",
        content: `Flow is a type for cold asynchronous streams of data. It's the recommended way to handle streams of values in coroutines, such as UI state updates or real-time data.\n\nFlow integrates seamlessly with coroutines and provides operators for transforming, filtering, and combining streams of data.`,
        code: `// Using Flow for reactive UI updates\nclass UserViewModel : ViewModel() {\n    private val _uiState = MutableStateFlow<UiState>(UiState.Loading)\n    val uiState: StateFlow<UiState> = _uiState.asStateFlow()\n    \n    init {\n        viewModelScope.launch {\n            userRepository.getUsers()\n                .catch { e ->\n                    _uiState.value = UiState.Error(e.message ?: "Unknown error")\n                }\n                .collect { users ->\n                    _uiState.value = UiState.Success(users)\n                }\n        }\n    }\n}\n\n// Using Flow with Compose\n@Composable\nfun UserScreen(viewModel: UserViewModel) {\n    val uiState by viewModel.uiState.collectAsState()\n    \n    when (uiState) {\n        is UiState.Loading -> CircularProgressIndicator()\n        is UiState.Success -> UserList(uiState.users)\n        is UiState.Error -> ErrorMessage(uiState.message)\n    }\n}`,
        language: "kotlin"
      },
      {
        id: "testing",
        title: "Testing Coroutines",
        content: `Testing coroutine-based code requires special consideration. Kotlin provides utilities for writing tests that are deterministic and don't rely on real time.\n\nThe TestDispatcher from kotlinx-coroutines-test is essential for controlling coroutine execution in tests.`,
        code: `@RunWith(JUnit4::class)\nclass CoroutinesTest {\n    @get:Rule\n    val mainCoroutineRule = MainCoroutineRule()\n    \n    @Test\n    fun testCoroutineOperation() = runTest {\n        // Given\n        val repository = FakeUserRepository()\n        val viewModel = UserViewModel(repository)\n        \n        // When\n        viewModel.loadUsers()\n        \n        // Then\n        assertEquals(UiState.Success(emptyList()), viewModel.uiState.value)\n    }\n}\n\nclass MainCoroutineRule(\n    private val dispatcher: TestDispatcher = StandardTestDispatcher()\n) : TestWatcher() {\n    override fun starting(description: Description?) {\n        super.starting(description)\n        Dispatchers.setMain(dispatcher)\n    }\n    \n    override fun finished(description: Description?) {\n        super.finished(description)\n        Dispatchers.resetMain()\n    }\n}`,
        language: "kotlin"
      },
      {
        id: "conclusion",
        title: "Conclusion",
        content: `By following these best practices, you can write more reliable and maintainable coroutine-based code in your Android applications. Remember:\n\n1. Always use structured concurrency\n2. Handle errors appropriately\n3. Choose the right dispatcher for each task\n4. Leverage Flow for reactive programming\n5. Write comprehensive tests for your coroutines\n\nThese practices will help you build robust applications that are easier to debug and maintain.`
      }
    ]
  },
  {
    slug: "jetpack-compose-state-management",
    title: "Jetpack Compose: State Management Patterns",
    excerpt: "Explore modern state management patterns in Jetpack Compose. Learn how to handle complex UI states efficiently using StateFlow, remember, and advanced composition patterns.",
    date: "2024-03-10",
    readTime: "10 min read",
    category: "Compose",
    tags: ["Compose", "State", "MVVM", "Android"],
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        content: `State management is a critical aspect of modern Android development with Jetpack Compose. Understanding how to properly manage state leads to predictable, testable, and maintainable applications.\n\nIn this guide, we'll explore various state management patterns and their use cases.`
      },
      {
        id: "local-state",
        title: "Local State with remember",
        content: `For simple, component-local state that doesn't need to survive configuration changes, the remember function is the primary tool.\n\nLocal state is ideal for UI-specific concerns like visibility toggles, form field values, and animation states.`,
        code: `@Composable\nfun Counter() {\n    var count by remember { mutableStateOf(0) }\n    \n    Column(\n        horizontalAlignment = Alignment.CenterHorizontally\n    ) {\n        Text(\n            text = "Count: $count",\n            style = MaterialTheme.typography.h4\n        )\n        Spacer(modifier = Modifier.height(16.dp))\n        Button(onClick = { count++ }) {\n            Text("Increment")\n        }\n    }\n}\n\n// Using rememberSaveable for state that survives configuration changes\n@Composable\nfun TextInput() {\n    var text by rememberSaveable { mutableStateOf("") }\n    \n    OutlinedTextField(\n        value = text,\n        onValueChange = { text = it },\n        label = { Text("Enter text") }\n    )\n}`,
        language: "kotlin"
      },
      {
        id: "viewmodel-state",
        title: "ViewModel State with StateFlow",
        content: `For state that needs to survive configuration changes and be shared across multiple screens, ViewModel is the recommended approach.\n\nStateFlow is a state-holder observable flow that emits the current and new state updates to its collectors.`,
        code: `class UserViewModel(\n    private val userRepository: UserRepository\n) : ViewModel() {\n    \n    private val _uiState = MutableStateFlow<UserUiState>(UserUiState.Loading)\n    val uiState: StateFlow<UserUiState> = _uiState.asStateFlow()\n    \n    fun loadUsers() {\n        viewModelScope.launch {\n            _uiState.value = UserUiState.Loading\n            \n            userRepository.getUsers()\n                .onSuccess { users ->\n                    _uiState.value = UserUiState.Success(users)\n                }\n                .onFailure { error ->\n                    _uiState.value = UserUiState.Error(\n                        error.message ?: "Unknown error"\n                    )\n                }\n        }\n    }\n}\n\nsealed class UserUiState {\n    object Loading : UserUiState()\n    data class Success(val users: List<User>) : UserUiState()\n    data class Error(val message: String) : UserUiState()\n}`,
        language: "kotlin"
      },
      {
        id: "composable-optimization",
        title: "Composable Optimization Patterns",
        content: `Writing efficient composable functions requires understanding how recomposition works and how to avoid unnecessary recompositions.\n\nProper use of keys, stable types, and the remember function can significantly improve performance.`,
        code: `// Using stable types for better recomposition performance\n@Stable\ndata class User(\n    val id: String,\n    val name: String,\n    val email: String\n)\n\n// Using keys for list optimization\n@Composable\nfun UserList(users: List<User>) {\n    LazyColumn {\n        items(\n            items = users,\n            key = { user -> user.id }\n        ) { user ->\n            UserItem(user = user)\n        }\n    }\n}\n\n// Using derivedStateOf for expensive calculations\n@Composable\nfun ExpensiveList(items: List<Item>) {\n    val filteredItems by remember {\n        derivedStateOf {\n            items.filter { it.isActive }\n                .sortedByDescending { it.timestamp }\n        }\n    }\n    \n    LazyColumn {\n        items(filteredItems) { item ->\n            ItemRow(item)\n        }\n    }\n}`,
        language: "kotlin"
      },
      {
        id: "advanced-patterns",
        title: "Advanced State Patterns",
        content: `For complex applications, you may need more sophisticated state management patterns. Let's explore some advanced approaches.\n\nThese patterns help manage complex state transitions and side effects in a predictable way.`,
        code: `// Using a reducer pattern for complex state\ndata class CounterState(\n    val count: Int = 0,\n    val history: List<Int> = emptyList()\n)\n\nsealed class CounterAction {\n    object Increment : CounterAction()\n    object Decrement : CounterAction()\n    object Reset : CounterAction()\n}\n\nfun counterReducer(state: CounterState, action: CounterAction): CounterState {\n    return when (action) {\n        is CounterAction.Increment -> state.copy(\n            count = state.count + 1,\n            history = state.history + state.count\n        )\n        is CounterAction.Decrement -> state.copy(\n            count = state.count - 1,\n            history = state.history + state.count\n        )\n        is CounterAction.Reset -> CounterState()\n    }\n}\n\n@Composable\nfun useCounter(): Pair<CounterState, (CounterAction) -> Unit> {\n    var state by remember { mutableStateOf(CounterState()) }\n    \n    val dispatch = { action: CounterAction ->\n        state = counterReducer(state, action)\n    }\n    \n    return state to dispatch\n}`,
        language: "kotlin"
      },
      {
        id: "conclusion",
        title: "Conclusion",
        content: `Effective state management in Jetpack Compose requires choosing the right tool for each situation:\n\n1. Use remember for local, UI-specific state\n2. Use ViewModel with StateFlow for state that needs to survive configuration changes\n3. Optimize recompositions with stable types and proper keys\n4. Consider advanced patterns for complex state logic\n\nBy following these patterns, you'll write more maintainable and performant Compose applications.`
      }
    ]
  },
  {
    slug: "kmp-shared-logic",
    title: "Kotlin Multiplatform: Sharing Business Logic",
    excerpt: "Learn how to share business logic across Android and iOS using Kotlin Multiplatform. Discover patterns for common code, platform-specific implementations, and dependency injection.",
    date: "2024-03-05",
    readTime: "15 min read",
    category: "KMP",
    tags: ["KMP", "Cross-platform", "iOS", "Architecture"],
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        content: `Kotlin Multiplatform (KMP) allows you to share code between Android and iOS while keeping platform-specific implementations where needed. This approach combines the benefits of shared code with native platform capabilities.\n\nIn this guide, we'll explore patterns for sharing business logic effectively across platforms.`
      },
      {
        id: "project-setup",
        title: "Setting Up a KMP Project",
        content: `A well-structured KMP project is essential for maintainability. The typical structure includes shared modules for common code and platform-specific source sets.\n\nLet's look at the project structure and configuration.`,
        code: `// build.gradle.kts (shared module)\nkotlin {\n    androidTarget {\n        compilations.all {\n            kotlinOptions {\n                jvmTarget = "1.8"\n            }\n        }\n    }\n    \n    iosX64()\n    iosArm64()\n    iosSimulatorArm64()\n    \n    sourceSets {\n        val commonMain by getting {\n            dependencies {\n                implementation(libs.kotlinx.coroutines.core)\n                implementation(libs.kotlinx.serialization.json)\n                implementation(libs.ktor.client.core)\n            }\n        }\n        \n        val androidMain by getting {\n            dependencies {\n                implementation(libs.ktor.client.okhttp)\n                implementation(libs.kotlinx.coroutines.android)\n            }\n        }\n        \n        val iosMain by getting {\n            dependencies {\n                implementation(libs.ktor.client.darwin)\n            }\n        }\n    }\n}`,
        language: "kotlin"
      },
      {
        id: "repository-pattern",
        title: "Repository Pattern in KMP",
        content: `The Repository pattern is ideal for KMP as it naturally separates business logic from data access. You can define interfaces in common code and provide platform-specific implementations.\n\nThis approach allows you to share the data access contract while implementing platform-specific details.`,
        code: `// commonMain\ninterface UserRepository {\n    suspend fun getUsers(): Result<List<User>>\n    suspend fun getUserById(id: String): Result<User>\n    suspend fun saveUser(user: User): Result<Unit>\n}\n\n// Implementation in commonMain\nclass UserRepositoryImpl(\n    private val api: UserApi,\n    private val cache: UserCache\n) : UserRepository {\n    override suspend fun getUsers(): Result<List<User>> {\n        return try {\n            val users = api.fetchUsers()\n            cache.saveUsers(users)\n            Result.success(users)\n        } catch (e: Exception) {\n            val cached = cache.getUsers()\n            if (cached != null) {\n                Result.success(cached)\n            } else {\n                Result.failure(e)\n            }\n        }\n    }\n}\n\n// Platform-specific module (Android)\nactual fun createUserRepository(): UserRepository {\n    val api = UserApiImpl(AndroidHttpClient())\n    val cache = AndroidUserCache(context)\n    return UserRepositoryImpl(api, cache)\n}\n\n// Platform-specific module (iOS)\nactual fun createUserRepository(): UserRepository {\n    val api = UserApiImpl(IosHttpClient())\n    val cache = IosUserCache()\n    return UserRepositoryImpl(api, cache)\n}`,
        language: "kotlin"
      },
      {
        id: "dependency-injection",
        title: "Dependency Injection in KMP",
        content: `Dependency injection in KMP requires careful consideration of platform differences. You can use various approaches, from simple factories to more sophisticated DI frameworks.\n\nHere's a pattern using manual dependency injection that works well across platforms.`,
        code: `// commonMain - Dependency Provider\nclass Dependencies(\n    val userRepository: UserRepository,\n    val analyticsService: AnalyticsService,\n    val settings: AppSettings\n)\n\n// Factory function\nfun createDependencies(): Dependencies {\n    return Dependencies(\n        userRepository = createUserRepository(),\n        analyticsService = createAnalyticsService(),\n        settings = createAppSettings()\n    )\n}\n\n// Usage in commonMain\nclass UserViewModel(\n    private val dependencies: Dependencies\n) {\n    private val _state = MutableStateFlow<UserUiState>(UserUiState.Loading)\n    val state: StateFlow<UserUiState> = _state.asStateFlow()\n    \n    fun loadUsers() {\n        // Access dependencies\n        dependencies.analyticsService.trackEvent("load_users")\n        \n        // Use repository\n        dependencies.userRepository.getUsers()\n            // ...\n    }\n}\n\n// Platform initialization\n// Android - in Application class\nclass App : Application() {\n    val dependencies = createDependencies()\n    \n    override fun onCreate() {\n        super.onCreate()\n        dependencies.analyticsService.initialize(this)\n    }\n}\n\n// iOS - in AppDelegate\nclass AppDelegate: UIResponder, UIApplicationDelegate {\n    let dependencies = createDependencies()\n    \n    func application(\n        _ application: UIApplication,\n        didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?\n    ) -> Bool {\n        dependencies.analyticsService.initialize()\n        return true\n    }\n}`,
        language: "kotlin"
      },
      {
        id: "testing-strategy",
        title: "Testing Shared Code",
        content: `Testing KMP code requires a strategy that covers both shared and platform-specific implementations. The goal is to maximize test coverage in common code while testing platform-specific details separately.\n\nUsing interfaces and dependency injection makes testing straightforward.`,
        code: `// Test in commonMain\nclass UserRepositoryTest {\n    @Test\n    fun testGetUsers() = runTest {\n        // Given\n        val fakeApi = FakeUserApi(\n            users = listOf(User("1", "Alice"), User("2", "Bob"))\n        )\n        val fakeCache = FakeUserCache()\n        val repository = UserRepositoryImpl(fakeApi, fakeCache)\n        \n        // When\n        val result = repository.getUsers()\n        \n        // Then\n        assertTrue(result.isSuccess)\n        assertEquals(2, result.getOrThrow().size)\n        assertTrue(fakeCache.savedUsers.isNotEmpty())\n    }\n    \n    @Test\n    fun testGetUsersOffline() = runTest {\n        // Given\n        val fakeApi = FakeUserApi(throwException = IOException("No network"))\n        val fakeCache = FakeUserCache(cachedUsers = listOf(User("1", "Cached")))\n        val repository = UserRepositoryImpl(fakeApi, fakeCache)\n        \n        // When\n        val result = repository.getUsers()\n        \n        // Then\n        assertTrue(result.isSuccess)\n        assertEquals(1, result.getOrThrow().size)\n        assertEquals("Cached", result.getOrThrow()[0].name)\n    }\n}`,
        language: "kotlin"
      },
      {
        id: "conclusion",
        title: "Conclusion",
        content: `Kotlin Multiplatform provides a powerful way to share business logic across platforms while maintaining platform-specific capabilities. By following these patterns:\n\n1. Structure your project for clear separation of concerns\n2. Use the Repository pattern for data access\n3. Implement dependency injection for testability\n4. Write tests for shared code to ensure reliability\n\nYou can build maintainable, cross-platform applications that leverage the strengths of both Android and iOS.`
      }
    ]
  },
  {
    slug: "mvvm-architecture",
    title: "MVVM Architecture: Complete Guide",
    excerpt: "Master the Model-View-ViewModel pattern in Android. Learn how MVVM separates concerns, manages data flow, and enables testable, maintainable code.",
    date: "2024-03-20",
    readTime: "15 min read",
    category: "Architecture",
    tags: ["MVVM", "Architecture", "Android", "ViewModel", "LiveData"],
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        content: "MVVM (Model-View-ViewModel) is the recommended architecture pattern for Android development. It separates the UI logic from business logic, making code more testable, maintainable, and scalable.\n\nThis guide covers MVVM in depth, including the data flow, layer responsibilities, and practical implementation patterns."
      },
      {
        id: "flow-diagram",
        title: "MVVM Data Flow",
        content: `Understanding how data flows in MVVM is crucial. Here's the complete flow:\n\n1. USER INTERACTION: User interacts with the View (UI)\n2. VIEW triggers VIEWMODEL: View calls a method on the ViewModel\n3. VIEWMODEL processes: ViewModel executes business logic, calls Repository\n4. REPOSITORY fetches data: Repository calls data sources (API, Database)\n5. DATA returns: Data flows back through Repository to ViewModel\n6. STATE updates: ViewModel updates its observable State (StateFlow/LiveData)\n7. UI RECOMPOSES: View observes state changes and updates UI automatically\n\nThe key principle: View observes ViewModel state, but ViewModel never knows about the View. This unidirectional data flow makes the system predictable and testable.\n\nClick each layer in the diagram below to explore its responsibilities.`,
        diagramComponent: "mvvm"
      },
      {
        id: "view-layer",
        title: "View Layer Implementation",
        content: "The View layer is responsible for displaying data and capturing user interactions. In modern Android development with Jetpack Compose, the View is represented by Composable functions.\n\nThe View should:\n- Observe ViewModel state using collectAsState()\n- Call ViewModel methods for user actions\n- Never contain business logic\n- Be as dumb as possible - just display state and forward events",
        code: `// View Layer - Composable Screen\n@Composable\nfun UserScreen(viewModel: UserViewModel) {\n    val uiState by viewModel.uiState.collectAsState()\n    \n    when (uiState) {\n        is UserUiState.Loading -> {\n            Box(\n                modifier = Modifier.fillMaxSize(),\n                contentAlignment = Alignment.Center\n            ) {\n                CircularProgressIndicator()\n            }\n        }\n        \n        is UserUiState.Success -> {\n            val users = (uiState as UserUiState.Success).users\n            UserList(\n                users = users,\n                onUserClick = { user -> viewModel.onUserClick(user) },\n                onRefresh = { viewModel.refreshUsers() }\n            )\n        }\n        \n        is UserUiState.Error -> {\n            val message = (uiState as UserUiState.Error).message\n            ErrorView(\n                message = message,\n                onRetry = { viewModel.refreshUsers() }\n            )\n        }\n    }\n}\n\n// Reusable Composable Components\n@Composable\nfun UserList(\n    users: List<User>,\n    onUserClick: (User) -> Unit,\n    onRefresh: () -> Unit\n) {\n    LazyColumn {\n        items(users) { user ->\n            UserItem(\n                user = user,\n                onClick = { onUserClick(user) }\n            )\n        }\n    }\n}\n\n@Composable\nfun ErrorView(message: String, onRetry: () -> Unit) {\n    Column(\n        horizontalAlignment = Alignment.CenterHorizontally\n    ) {\n        Text(text = message, color = MaterialTheme.colors.error)\n        Spacer(modifier = Modifier.height(16.dp))\n        Button(onClick = onRetry) {\n            Text("Retry")\n        }\n    }\n}`,
        language: "kotlin"
      },
      {
        id: "viewmodel-layer",
        title: "ViewModel Layer Implementation",
        content: "The ViewModel is the bridge between the View and the Model layer. It holds and manages UI state, processes user actions, and coordinates with the Repository.\n\nKey responsibilities:\n- Hold UI state as StateFlow or LiveData\n- Process user actions (methods called by View)\n- Call Repository to fetch/update data\n- Handle async operations with coroutines\n- Survive configuration changes\n- Never reference View or Android Context directly",
        code: `// ViewModel Implementation\nclass UserViewModel(\n    private val userRepository: UserRepository\n) : ViewModel() {\n    \n    // UI State - immutable to View\n    private val _uiState = MutableStateFlow<UserUiState>(UserUiState.Loading)\n    val uiState: StateFlow<UserUiState> = _uiState.asStateFlow()\n    \n    // Selected user for detail view\n    private val _selectedUser = MutableStateFlow<User?>(null)\n    val selectedUser: StateFlow<User?> = _selectedUser.asStateFlow()\n    \n    init {\n        loadUsers()\n    }\n    \n    // User Actions (called by View)\n    fun loadUsers() {\n        viewModelScope.launch {\n            _uiState.value = UserUiState.Loading\n            \n            userRepository.getUsers()\n                .onSuccess { users ->\n                    _uiState.value = UserUiState.Success(users)\n                }\n                .onFailure { error ->\n                    _uiState.value = UserUiState.Error(\n                        error.message ?: "Unknown error"\n                    )\n                }\n        }\n    }\n    \n    fun refreshUsers() {\n        loadUsers()\n    }\n    \n    fun onUserClick(user: User) {\n        _selectedUser.value = user\n    }\n    \n    fun deleteUser(user: User) {\n        viewModelScope.launch {\n            userRepository.deleteUser(user.id)\n                .onSuccess {\n                    // Refresh list after deletion\n                    loadUsers()\n                }\n                .onFailure { error ->\n                    // Show error snackbar\n                }\n        }\n    }\n}\n\n// Sealed class for type-safe UI state\nsealed class UserUiState {\n    object Loading : UserUiState()\n    data class Success(val users: List<User>) : UserUiState()\n    data class Error(val message: String) : UserUiState()\n}`,
        language: "kotlin"
      },
      {
        id: "repository-layer",
        title: "Repository Layer Implementation",
        content: "The Repository is the single source of truth for data. It coordinates between remote and local data sources, implements caching strategies, and provides a clean API for the ViewModel.\n\nThe Repository should:\n- Be the single source of truth\n- Coordinate multiple data sources\n- Implement caching and sync logic\n- Return Result types for error handling\n- Be independent of UI concerns",
        code: `// Repository Interface\ninterface UserRepository {\n    suspend fun getUsers(): Result<List<User>>\n    suspend fun getUserById(id: String): Result<User>\n    suspend fun deleteUser(id: String): Result<Unit>\n    suspend fun saveUser(user: User): Result<Unit>\n}\n\n// Repository Implementation\nclass UserRepositoryImpl(\n    private val remoteDataSource: UserRemoteDataSource,\n    private val localDataSource: UserLocalDataSource\n) : UserRepository {\n    \n    override suspend fun getUsers(): Result<List<User>> {\n        return try {\n            // Try remote first\n            val remoteUsers = remoteDataSource.fetchUsers()\n            // Cache locally\n            localDataSource.saveUsers(remoteUsers)\n            Result.success(remoteUsers)\n        } catch (e: Exception) {\n            // Fallback to local cache\n            val cachedUsers = localDataSource.getUsers()\n            if (cachedUsers.isNotEmpty()) {\n                Result.success(cachedUsers)\n            } else {\n                Result.failure(e)\n            }\n        }\n    }\n    \n    override suspend fun getUserById(id: String): Result<User> {\n        return try {\n            val user = remoteDataSource.fetchUserById(id)\n            localDataSource.saveUser(user)\n            Result.success(user)\n        } catch (e: Exception) {\n            val cachedUser = localDataSource.getUserById(id)\n            if (cachedUser != null) {\n                Result.success(cachedUser)\n            } else {\n                Result.failure(e)\n            }\n        }\n    }\n    \n    override suspend fun deleteUser(id: String): Result<Unit> {\n        return try {\n            remoteDataSource.deleteUser(id)\n            localDataSource.deleteUser(id)\n            Result.success(Unit)\n        } catch (e: Exception) {\n            Result.failure(e)\n        }\n    }\n    \n    override suspend fun saveUser(user: User): Result<Unit> {\n        return try {\n            remoteDataSource.saveUser(user)\n            localDataSource.saveUser(user)\n            Result.success(Unit)\n        } catch (e: Exception) {\n            Result.failure(e)\n        }\n    }\n}`,
        language: "kotlin"
      },
      {
        id: "testing-mvvm",
        title: "Testing MVVM Components",
        content: "MVVM's separation of concerns makes testing straightforward. Each layer can be tested independently with proper mocking.\n\nTest strategies:\n- ViewModel: Test with fake Repository\n- Repository: Test with fake data sources\n- View: Use Compose testing utilities\n- Integration: Test layer interactions",
        code: `// ViewModel Testing\nclass UserViewModelTest {\n    \n    private lateinit var viewModel: UserViewModel\n    private lateinit var fakeRepository: FakeUserRepository\n    \n    @Before\n    fun setup() {\n        fakeRepository = FakeUserRepository()\n        viewModel = UserViewModel(fakeRepository)\n    }\n    \n    @Test\n    fun loadUsers_success() = runTest {\n        // Given\n        fakeRepository.setUsers(listOf(\n            User("1", "Alice"),\n            User("2", "Bob")\n        ))\n        \n        // When\n        viewModel.loadUsers()\n        \n        // Then\n        val state = viewModel.uiState.value\n        assertTrue(state is UserUiState.Success)\n        assertEquals(2, (state as UserUiState.Success).users.size)\n    }\n    \n    @Test\n    fun loadUsers_error() = runTest {\n        // Given\n        fakeRepository.setShouldThrowError(true)\n        \n        // When\n        viewModel.loadUsers()\n        \n        // Then\n        val state = viewModel.uiState.value\n        assertTrue(state is UserUiState.Error)\n    }\n    \n    @Test\n    fun deleteUser_refreshesList() = runTest {\n        // Given\n        val user = User("1", "Alice")\n        fakeRepository.setUsers(listOf(user))\n        \n        // When\n        viewModel.deleteUser(user)\n        \n        // Then\n        val state = viewModel.uiState.value\n        assertTrue(state is UserUiState.Success)\n        assertEquals(0, (state as UserUiState.Success).users.size)\n    }\n}\n\n// Repository Testing\nclass UserRepositoryTest {\n    \n    @Test\n    fun getUsers_remoteSuccess() = runTest {\n        // Given\n        val fakeRemote = FakeRemoteDataSource(\n            users = listOf(User("1", "Alice"))\n        )\n        val fakeLocal = FakeLocalDataSource()\n        val repository = UserRepositoryImpl(fakeRemote, fakeLocal)\n        \n        // When\n        val result = repository.getUsers()\n        \n        // Then\n        assertTrue(result.isSuccess)\n        assertEquals(1, result.getOrThrow().size)\n        // Verify local was updated\n        assertEquals(1, fakeLocal.getUsers().size)\n    }\n    \n    @Test\n    fun getUsers_remoteFails_usesLocalCache() = runTest {\n        // Given\n        val fakeRemote = FakeRemoteDataSource(throwError = true)\n        val fakeLocal = FakeLocalDataSource(\n            cachedUsers = listOf(User("1", "Cached"))\n        )\n        val repository = UserRepositoryImpl(fakeRemote, fakeLocal)\n        \n        // When\n        val result = repository.getUsers()\n        \n        // Then\n        assertTrue(result.isSuccess)\n        assertEquals("Cached", result.getOrThrow()[0].name)\n    }\n}`,
        language: "kotlin"
      },
      {
        id: "conclusion",
        title: "Conclusion",
        content: "MVVM provides a clean, testable architecture for Android applications:\n\n1. View: Displays state, captures user actions (Composables)\n2. ViewModel: Holds state, processes actions, coordinates with Repository\n3. Repository: Single source of truth, coordinates data sources\n4. Data Sources: Remote (API) and Local (Database)\n\nBenefits:\n- Clear separation of concerns\n- Testable at each layer\n- Survives configuration changes\n- Unidirectional data flow\n- Easy to debug and maintain\n\nNext steps: Explore MVI for more predictable state management with explicit state machines."
      }
    ]
  }
];

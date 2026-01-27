# PowerShell script to replace navy blue with sapphire blue across all components

$componentsPath = "c:\Users\sm091\Downloads\bas bhai\BlueberryFin\components"

# Color mappings
$colorReplacements = @{
    '#001f3f' = '#0f2c59'  # Navy to Sapphire
    '#0052cc' = '#2563eb'  # Bright blue to Sapphire accent
    '#002b4d' = '#1e3a8a'  # Dark navy to Dark sapphire
    '#0066ff' = '#3b82f6'  # Hover blue to Sapphire hover
}

# Get all .tsx files
$files = Get-ChildItem -Path $componentsPath -Filter "*.tsx" -Recurse

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $modified = $false
    
    foreach ($old in $colorReplacements.Keys) {
        if ($content -match [regex]::Escape($old)) {
            $content = $content -replace [regex]::Escape($old), $colorReplacements[$old]
            $modified = $true
        }
    }
    
    if ($modified) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "Updated: $($file.Name)" -ForegroundColor Green
    }
}

Write-Host "`nColor replacement complete!" -ForegroundColor Cyan

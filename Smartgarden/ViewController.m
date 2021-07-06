//
//  ViewController.m
//  Smartgarden
//
//  Created by Jörg Vanderhoeven on 05.07.21.
//

#import "ViewController.h"
#import <Cordova/CDVViewController.h>
#import <WebKit/WebKit.h>

@interface ViewController ()


- (IBAction)select:(id)sender;
- (IBAction)dashboard:(id)sender;
- (IBAction)watering:(id)sender;
- (IBAction)settings:(id)sender;
- (void)resetButtonTints;
- (void)setBottomButtonActive:(NSString*) item;

@property (weak, nonatomic) IBOutlet UIBarButtonItem *select;
@property (weak, nonatomic) IBOutlet UIBarButtonItem *dashboard;
@property (weak, nonatomic) IBOutlet UIBarButtonItem *watering;
@property (weak, nonatomic) IBOutlet UIBarButtonItem *settings;

@end

@implementation ViewController

@synthesize topNavigtion;
@synthesize bottomNavigation;

- (void)viewDidLoad {
    [super viewDidLoad];
    self.viewController = [CDVViewController new];
    
    // set CDVViewController as childController to be able to access
    // ViewController over parentViewControler from CordovaPlugin
    [self addChildViewController:_viewController];
    [bottomNavigation setHidden:true];
    
    [_theView addSubview:_viewController.view];
}

- (void)resetButtonTints {
    UIColor *primaryDark = [UIColor colorNamed:@"primaryDark"];
    _select.tintColor = primaryDark;
    _dashboard.tintColor = primaryDark;
    _watering.tintColor = primaryDark;
    _settings.tintColor = primaryDark;
}

- (void)setBottomButtonActive:(NSString *) item {
    NSArray *items = @[@"select", @"dashboard", @"watering", @"settings"];
    int type = (int)[items indexOfObject:item];
    switch(type){
        case 0  :
            _select.tintColor = UIColor.blackColor;
            break;
        case 1  :
            _dashboard.tintColor = UIColor.blackColor;
            break;
        case 2  :
            _watering.tintColor = UIColor.blackColor;
            break;
        case 3  :
            _settings.tintColor = UIColor.blackColor;
            break;
        default :
            _select.tintColor = UIColor.blackColor;
    }
}

- (IBAction)settings:(id)sender {
    [self resetButtonTints];
    [self setBottomButtonActive:@"settings"];
    [_viewController.webViewEngine evaluateJavaScript:@"App.goTo('settings');" completionHandler:nil ];
}

- (IBAction)watering:(id)sender {
    [self resetButtonTints];
    [self setBottomButtonActive:@"watering"];
    [_viewController.webViewEngine evaluateJavaScript:@"App.goTo('watering');" completionHandler:nil ];
}

- (IBAction)dashboard:(id)sender {
    [self resetButtonTints];
    [self setBottomButtonActive:@"dashboard"];
    [_viewController.webViewEngine evaluateJavaScript:@"App.goTo('dashboard');" completionHandler:nil ];
}

- (IBAction)select:(id)sender {
    [self resetButtonTints];
    [self setBottomButtonActive:@"select"];
    [_viewController.webViewEngine evaluateJavaScript:@"App.goTo('select');" completionHandler:nil ];
}
@end
